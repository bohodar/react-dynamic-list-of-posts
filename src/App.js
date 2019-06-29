import React from 'react';
import './App.css';
import PostList from './components/Postlist'
import { getPosts, getComments, getUsers } from './api/data'
import UserList from './components/UserList'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      posts: [],
      showingPosts: [],
      comments: [],
      label: 'Load ',
      isPostsLoaded: false,
      loadedPostsId: 0
    }
  }
  async componentDidMount() {
    const data = await getUsers();
    this.setState((prev) => {
      const copyObj = {...prev};
      copyObj.users = [...data];
      return {
        ...copyObj
      }
    });
  }

  changingLabel() {
    this.setState({label: 'Loading '})
  }
  showPosts = async (userId) => {
    this.changingLabel();
    let posts;

    if (!this.state.isPostsLoaded) {
      posts = await getPosts();
      this.setState((prev) => {
        const copyObj = {...prev};
        copyObj.posts = [...posts];
        copyObj.isPostsLoaded = true;
        return {
          ...copyObj
        }
      })
    } else {
      posts = [...this.state.posts]
    }
    const sortedPosts = posts.filter(item => item.userId === userId);
    this.setState((prev) => {
      const copyObj = {...prev};
      copyObj.showingPosts = [...sortedPosts];
      copyObj.loadedPostsId = userId;
      copyObj.label = 'Show ';
      return {
        ...copyObj
      }
    });
  };

  sortPosts = (sortType) => {
    const sortTypeMap = {
      'byTitle': (a, b) => a.title.localeCompare(b.title),
      'byContent': (a, b) => a.body.localeCompare(b.body)
    };
    this.setState((prev) => {
      const { showingPosts } = prev;
      showingPosts.sort(sortTypeMap[sortType]);
      return {
        showingPosts: [...showingPosts]
      }
    })
  };

  render() {
    return (
      <div className="wrapper">
        <UserList
          users={this.state.users}
          load={this.loadUsers}
          status={this.state.loadedPostsId}
          label={this.state.label}
          showPosts={this.showPosts}
        />
        <PostList
          posts={this.state.showingPosts}
          users={this.state.users}
          comments={this.state.comments}
          sortPosts={this.sortPosts}
        />
      </div>
    )
  }
}

export default App;

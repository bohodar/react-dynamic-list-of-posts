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
      showingPosts: [],
      label: 'Load ',
      isDataLoad: false,
      loadedPostsId: 0
    }
  }
  async componentDidMount() {
    const data = await getUsers();
    this.setState({users: [...data]});
  }

  changingLabel() {
    this.setState({label: 'Loading '})
  }

  async loadingData(){
    this.changingLabel();
    let posts, comments, resultUsers;
    posts = await getPosts();
    comments = await getComments();
    this.setState((prev) => {
      const copyObj = {...prev};
      const copyUsers = [...copyObj.users];
      resultUsers = copyUsers.map(user => {
        const sortedPosts = posts
          .filter(post => post.userId === user.id)
          .map(sortedPost => {
            const sortedComments = comments
              .filter(comm => comm.postId === sortedPost.id);

            return {
              ...sortedPost,
              comments: [...sortedComments],
              isCommentsShowed: false
            }
          });

        return {
          ...user,
          posts: [...sortedPosts],
        }
      });

      return {
        ...copyObj,
        users: [...resultUsers],
        isDataLoad: true
      }
    });
    return resultUsers;
  }

  showPosts = async (userId) => {
    if (!this.state.isDataLoad) {
      await this.loadingData();
    }
    this.setState((prev) => {
      const copyObj = {...prev};
      const copyUser = copyObj.users
        .find(user => user.id === userId);
      copyObj.label = 'Show ';
      copyObj.loadedPostsId = userId;
      copyObj.showingPosts = [...copyUser.posts];
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

  showComments = (postId) => {
    this.setState(prev => {
      const copyPosts = [...prev.showingPosts];
      const copyPost = copyPosts.find(post => post.id === postId);
      copyPost.isCommentsShowed = !copyPost.isCommentsShowed;
      return {
        showingPosts: [...copyPosts]
      }
    })
  };

  render() {
    return (
      <div className="wrapper">
        <UserList
          users={this.state.users}
          status={this.state.loadedPostsId}
          label={this.state.label}
          showPosts={this.showPosts}
        />
        <PostList
          posts={this.state.showingPosts}
          users={this.state.users}
          sortPosts={this.sortPosts}
          onShowComments={this.showComments}
        />
      </div>
    )
  }
}

export default App;

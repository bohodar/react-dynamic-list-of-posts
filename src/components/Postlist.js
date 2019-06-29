import React from 'react'
import Post from './Post'

function PostList(props) {
  const { users, posts, comments, sortPosts } = props;
  return (
    <section className="rightside-wrapper">
      <div className="rightside__header">
        <div
          className="rightside__header__button"
          onClick={() => sortPosts('byTitle')}
        >
          Sort by title
        </div>
        <div
          className="rightside__header__button"
          onClick={() => sortPosts('byContent')}
        >
             Sort by content
        </div>
      </div>
      <div className="rightside">
      {posts
        .map(item =>
          <Post
            post={item}
            key={item.id}
            comments={comments}
            user={users.find(el => el.id === item.userId)}
          />
        )}
      </div>
    </section>
  );
}

export default PostList

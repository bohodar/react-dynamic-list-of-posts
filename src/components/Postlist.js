import React from 'react'
import Post from './Post'

function PostList(props) {
  const { users, posts, sortPosts, onShowComments } = props;
  return (
    <section className="rightside-wrapper">
    {posts.length ?
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
      </div> : null
    }
      <div className="rightside">
      {posts
        .map((post) =>
          <Post
            post={post}
            key={post.id}
            onShowComments={onShowComments}
            user={users.find(el => el.id === post.userId)}
          />
        )}
      </div>
    </section>
  );
}

export default PostList

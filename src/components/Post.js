import React from 'react'
import CommentList from './CommentList'
import User from './User'

function Post(props) {
  const { post, user, onShowComments, postIndex } = props;
  return (
    <div className="rightside-item">
      <div className="rightside-item__top">
        <div className="rightside-item__user-info">
          <h4>{user.name}</h4>
          <span>{user.email}</span>
          <br/>
          <code>{user.address.city + `: ` + user.address.zipcode}</code>
        </div>
        <div className="rightside-item__post-info">
          <h3>{post.title}</h3>
          <code>{post.body}</code>
        </div>
      </div>
      <CommentList
        post={post}
        onShowComments={onShowComments}
      />
    </div>
  )
}

export default Post

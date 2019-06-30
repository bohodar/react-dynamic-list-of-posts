import React from 'react'

function Comment(props) {
  const { comment } = props;
  return (
    <div className="comment">
      <div className="comment__user">
        <span className="comment__user__name">{comment.name}</span>
        <code className="comment__user__email">{comment.email}</code>
      </div>
      <div className="comment__body">
        <code>{comment.body}</code>
      </div>
    </div>
  )
}

export default Comment

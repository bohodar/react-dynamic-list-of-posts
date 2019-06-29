import React from 'react'

function Comment(props) {
  const { comment } = props;
  return (
    <div className="comment">
      <h5>{comment.body}</h5>
    </div>
  )
}

export default Comment

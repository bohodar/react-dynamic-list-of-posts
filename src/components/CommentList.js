import React from 'react'
import Comment from './Comment'

function CommentList(props) {
  const { postId, comments } = props;
  return (
    <div className="rightside-item__bottom__wrapper">
      {comments
        .filter(el => el.postId === postId)
        .map(el => <Comment comment={el} />)
      }
    </div>
  )
}

export default CommentList

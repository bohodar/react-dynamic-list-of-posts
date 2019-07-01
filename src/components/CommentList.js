import React from 'react'
import Comment from './Comment'

function CommentList(props) {
  const { post, onShowComments } = props;
  return (
    <div className="rightside-item__bottom">
      <span
        className="rightside-item__bottom__heading"
        onClick={() => onShowComments(post.id)}
      >
        {post.isCommentsShowed ?
          "Hide comments" :
          "Show " + post.comments.length + " comments"
        }
      </span>
      <div className="rightside-item__bottom__comments" >
        {post.isCommentsShowed ?
          post.comments
            .map(el => <Comment comment={el} key={el.id} />) :
          null
        }
      </div>
    </div>
  )
}

export default CommentList

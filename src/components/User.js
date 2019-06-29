import React from 'react'

function User(props) {
  const { user, showPosts, label, status } = props;
  return (
    <div className={status === user.id ?
      "leftside-item leftside-item--selected" :
      "leftside-item"
    }>
      <p><h3>{user.name}</h3></p>
      <p><code>{user.email}</code></p>
      <button
        className="leftside-item--button"
        onClick={() => showPosts(user.id)}
        disabled={status === user.id}
      >
        {label + "posts"}
      </button>
    </div>
  )
}

export default User

import React from 'react'
import User from './User'

function UserList(props) {
  const {users, status, label, showPosts} = props;
  return (
    <section className="leftside">
      {users.length ?
        users
          .map(item =>
            <User
              user={item}
              key={item.id}
              showPosts={showPosts}
              status={status}
              label={label}
            />
          ) :
        <div className="attention">
          <span>Loading data of users</span>
        </div>
      }
    </section>
  );
}

export default UserList

// Libraries
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import users from '~/services/users';

function UserListPage(): React.ReactNode {
  return (
    <div className="UserListPage">
      <h1>UserListPage</h1>
      <ul>
        {
          users.map(user => <li key={user.id}>
            <Link to={user.id.toString()}>{user.name}</Link>
          </li>)
        }
      </ul>
    </div>
  )
};

export default UserListPage;
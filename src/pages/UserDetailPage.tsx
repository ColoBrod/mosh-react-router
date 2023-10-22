// Libraries
import React from "react";
import { useParams } from "react-router-dom";
import users from "~/services/users";

function UserDetailPage(): React.ReactNode {
  const params = useParams();
  const { id: idString } = params;
  if (!idString) return null;
  const id = parseInt(idString);
  const user = users.find(user => user.id === id);
  console.log(user);
  if (!user) return null;

  return (
    <div className="UserDetailPage">
      <h1>UserDetailPage</h1>
      <ul>
        <li>User ID: {user.id}</li>
        <li>Name: {user.name}</li>
      </ul>
    </div>
  )
};

export default UserDetailPage;
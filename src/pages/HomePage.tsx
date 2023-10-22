// Libraries
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function HomePage(): React.ReactNode {
  return (
    <div className="HomePage">
      <h1>HomePage</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat cum laudantium a quo aliquid vitae autem? Laboriosam repudiandae suscipit sunt quae consequatur. Sit fuga fugit pariatur expedita, quas odio laboriosam?</p>
      <Link to={`/users`}>Users</Link>
      <Link to={`/contact`}>Contact</Link>
    </div>
  )
};

export default HomePage;
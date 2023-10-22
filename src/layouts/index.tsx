import React from "react";
import { Link, Outlet } from "react-router-dom";

const Layout = (): React.ReactNode => (
  <div>
    <header>
      <nav>
        <Link to={`/users`}>Users</Link>
        <Link to={`/contact`}>Contact</Link>
      </nav>
    </header>

    <main>
      <Outlet />
    </main>

    <footer>
      Footer content
    </footer>
  </div>
);

export default Layout;
import { createBrowserRouter } from "react-router-dom";
import Layout from "~/layouts";
import ContactPage from "~/pages/ContactPage";
import HomePage from "~/pages/HomePage";
import UserDetailPage from "~/pages/UserDetailPage";
import UserListPage from "~/pages/UserListPage";

const router = createBrowserRouter([
  {
    path: '/', 
    element: <Layout />, 
    children: [
      { path: '', element: <HomePage /> },
      { path: 'users', element: <UserListPage />},
      { path: 'users/:id', element: <UserDetailPage />},
      { path: 'contact', element: <ContactPage />},
    ],
  }


  // { path: '/', element: <HomePage /> },
  // { path: '/users', element: <UserListPage />},
  // { path: '/users/:id', element: <UserDetailPage />},
  // { path: '/contact', element: <ContactPage />},
]);

export default router;
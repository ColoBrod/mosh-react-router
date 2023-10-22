import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { RouterProvider } from 'react-router-dom';
import router from './routing/routes';


// import { BrowserRouter } from 'react-router-dom';
/* 
<BrowserRouter>
</BrowserRouter> 
*/

const container = document.getElementById('root');
if (container) {
  const root = ReactDOM.createRoot(container);
  // const element = React.createElement(App, {}, null);
  root.render(
    <RouterProvider router={router} /> 
  );
}


// 
// 

// if ('serviceWorker' in navigator) {
//   navigator.serviceWorker.register('/service-worker.js');
// }
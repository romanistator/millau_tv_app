import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.css';
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import {Show} from './pages/Show.jsx'
import { About } from './pages/About.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about/:id",
    element:<About/>
  },
  {
    path: "/show/:id",
    element:<Show/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

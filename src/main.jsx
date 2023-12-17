import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LayOut from './Componetes/LayOuts/LayOut.jsx';
import Orders from './Componetes/Orders/Orders.jsx';
import Inventory from './Componetes/Inventory/Inventory.jsx';
import Login from './Componetes/Login/Login.jsx';
import Error from './Componetes/Error/Error.jsx';
import Shop from './Componetes/Shop/Shop.jsx';
import loderDataState from './Componetes/LoderDataState/LoderData.js';
import CheckOut from './Componetes/CheckOut/CheckOut.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayOut></LayOut>,
    children: [
      {
        path: '/',
        element: <Shop></Shop>
      },
      {
        path: 'orders',
        element: <Orders></Orders>,
        loader: loderDataState
      },
      {
        path: 'inventory',
        element: <Inventory></Inventory>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'checkout',
        element: <CheckOut></CheckOut>
      },
      {
        path: '*',
        element: <Error></Error>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

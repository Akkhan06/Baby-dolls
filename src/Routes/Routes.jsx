import React from 'react';
import '../index.css'
import {
    createBrowserRouter
  } from "react-router-dom";
import Navbar from '../Main/Navbar/Navbar';
import Main from '../Main/Main';
import Banner from '../Main/Banner/Banner';
import Home from '../pages/Home/Home';
import Blog from '../pages/Blog/Blog';
import Login from '../pages/Login/Login';
 
const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
          path: "blog",
          element: <Blog></Blog>
        },
        {
          path: "login",
          element: <Login></Login>
        }
      ]
    },
  ]);

export default router;
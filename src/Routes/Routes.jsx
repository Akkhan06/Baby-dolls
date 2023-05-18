import React from 'react';
import '../index.css'
import {
    createBrowserRouter
  } from "react-router-dom";
import Navbar from '../Main/Navbar/Navbar';
import Main from '../Main/Main';
import Banner from '../Main/Banner/Banner';
import Home from '../pages/Home/Home';
 
const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        }
      ]
    },
  ]);

export default router;
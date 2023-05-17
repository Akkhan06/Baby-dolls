import React from 'react';
import '../index.css'
import {
    createBrowserRouter
  } from "react-router-dom";
import Navbar from '../Main/Navbar/Navbar';
 
const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar></Navbar>,
      children: [
        {
            
        }
      ]
    },
  ]);

export default router;
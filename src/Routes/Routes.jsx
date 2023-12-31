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
import Register from '../pages/Register/Register';
import Alltoy from '../pages/Alltoy/Alltoy';
import Addtoy from '../pages/Addtoy/Addtoy';
import Mytoy from '../pages/Mytoy/Mytoy';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Details from '../pages/Details/Details';
import UpdateToy from '../pages/UpdateToy/UpdateToy';
import PrivateRoutes from '../PrivateRoutes/PrivateRoutes';
 
const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
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
        },
        {
          path: "register",
          element: <Register></Register>
        },
        {
          path: "alltoy",
          element: <Alltoy></Alltoy>
        },
        {
          path: "addtoy",
          element: <Addtoy></Addtoy>
        },
        {
          path: "mytoy",
          element: <Mytoy></Mytoy>
        },
        {
          path: "/details/:id",
          element: <PrivateRoutes><Details/></PrivateRoutes>,
          loader: ({params}) => fetch(`https://testtt-akkhan06.vercel.app/alltoys_one/${params.id}`)
        },
        {
          path: '/edit/:id',
          element: <PrivateRoutes><UpdateToy></UpdateToy></PrivateRoutes>,
          loader: ({params}) => fetch(`https://testtt-akkhan06.vercel.app/alltoys_one/${params.id}`)
        }
      ]
    },
  ]);

export default router;
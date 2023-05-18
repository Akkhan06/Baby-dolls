import React from "react";
import logo from "../../assets/logo.jpg"
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const nav = (
    <>
      <li>
        <Link to='/'>Home</Link>
      </li>

      <li>
        <Link to={`/`}>All Toys</Link>
      </li>
      <li>
        <Link to={`/`}>My Toys</Link>
      </li>
      <li>
        <Link to={`/`}>Add A Toy</Link>
      </li>
      <li>
        <Link to={`/`}>Blogs</Link>
      </li>
     
    </>
  );
  return (
    <div className="bg-[#9363b5]">
        <div className="navbar  max-w-[1240px] mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-[20px] font-semibold text-white">
        {nav}
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl"><img src={logo} className="w-12 rounded-full" alt="" />
    <h1 className="ml-3 text-white">Baby Dolls</h1></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-[20px] font-semibold text-white space-x-3">
      {nav}
    </ul>
  </div>
  <div className="navbar-end">
  <div className="avatar placeholder items-center">
  <h1 className="font-semibold mr-3">Afsar khan</h1>
  <div className="bg-neutral-focus text-neutral-content rounded-full w-8">
   <span className="text-xs">AA</span>
  </div>
</div>
  </div>
</div>
    </div>
  );
};

export default Navbar;

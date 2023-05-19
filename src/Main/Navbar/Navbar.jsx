import React, { useContext, useState } from "react";
import logo from "../../assets/logo.jpg"
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Navbar = () => {
  const {user, logOut} =useContext(AuthContext)
  const [enter, setEnter] = useState(false)
  
  const signOut = () => {
    logOut()
    .then(result => {})
    .then(error => {})
  }

  const nav = (
    <>
      <li>
        <NavLink className={({isActive}) => isActive ? "bg-[#865ba5]" : '' } to='/'>Home</NavLink>
      </li>

      {
        user &&<> <li>
        <NavLink className={({isActive}) => isActive ? "bg-[#865ba5]" : '' } to={`/alltoy`}>All toys</NavLink>
      </li>
      <li>
        <NavLink className={({isActive}) => isActive ? "bg-[#865ba5]" : '' } to={`mytoy`}>My toys</NavLink>
      </li>


      <li>
        <NavLink className={({isActive}) => isActive ? "bg-[#865ba5]" : '' } to={`addtoy`}>Add A toy</NavLink>
      </li> </>
      }
      <li>
        <NavLink className={({isActive}) => isActive ? "bg-[#865ba5]" : '' } to={`/blog`}>Blogs</NavLink>
      </li>
    </>
  );


  return (
    <div className="bg-[#bfa0d5]">
        <div className="navbar  max-w-[1240px] mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu  menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-[20px] font-semibold text-white">
        {nav}
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl"><img src={logo} className="w-12 rounded-full" alt="" />
    <h1 className="ml-3 text-white hidden md:block">Baby Dolls</h1></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-[10px] font-semibold text-white normal-case ">
      {nav}
    </ul>
  </div>
  <div className="navbar-end">
  <div className="avatar placeholder items-center">
  {user ? <>
    <h1 className={`font-semibold  md:mr-3 ${enter ? 'block' : 'hidden'}`}>{user?.displayName}</h1>
  <div className="bg-neutral-focus text-neutral-content rounded-full w-8">
   <span onMouseEnter={() => setEnter(true)} onMouseLeave={() => setEnter(false)} className="text-xs"><img src={user?.photoURL
} alt="" /></span>
  </div>
  <Link ><button onClick={signOut} className="btn btn-ghost normal-case">Log out</button></Link>
  </> :  <Link to='/login'><button  className="btn btn-ghost normal-case">Login</button></Link>}
 
</div>
  </div>
</div>
    </div>
  );
};

export default Navbar;

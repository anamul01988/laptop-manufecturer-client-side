import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink } from "react-router-dom";
import auth from "../firebase.init";

const Navbar = () => {
  const [user] = useAuthState(auth);
  // console.log(user.user.email)
  const logout = ()=>{
    signOut(auth);
  }
  return (
    <div class="navbar bg-base-100">
      <div class="navbar-start">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/purchase">Purchase</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard">Dashboard</NavLink>
            </li>
            <li>
              <NavLink to="/blogs">Blogs</NavLink>
            </li>
            <li>
              <NavLink to="/portfolio">Portfolio</NavLink>
            </li>
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
          </ul>
        </div>
        <NavLink className="font-bold text-2xl text-neutral" to="/ " class="btn btn-ghost normal-case text-xl">
          Laptop-Menufecture
        </NavLink>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal p-0">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/purchase">Purchase</NavLink>
          </li>
          {
            user && (
              <li>
              <NavLink to="/dashboard">Dashboard</NavLink>
            </li>
            )
          }
          <li>
            <NavLink to="/blogs">Blogs</NavLink>
          </li>
          <li>
            <NavLink to="/portfolio">Portfolio</NavLink>
          </li>
          {/* {
            user && (
              <li>
            <NavLink to="/portfolio"><h3>{user.displayName}</h3></NavLink>
            </li>
            )
          } */}
        </ul>
      </div>
    
      <div class="navbar-end">
        <ul class="menu menu-horizontal p-0">
          <li>
          {
            user && (
              <li>
            <NavLink to="/portfolio"><h3>{user.displayName}</h3></NavLink>
            </li>
            )
          }
          </li>
        <li>
            {
              user ? (
                <div>
                   {/* <h3>{user?.user?.email}</h3> */}
                <button onClick={logout} className="btn btn-primary">
                Sign out
              </button> 
                </div>
              ) : (
                <NavLink to="/login">Login</NavLink>
              )
            }
             
            </li>
        </ul>
    
      </div>
    </div>

    
  );
};

export default Navbar;

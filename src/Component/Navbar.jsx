import React from "react";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="navbar backdrop-blur-2xl fixed z-50 md:px-20 mb-20">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <NavLink to="/">
              <a>Home</a>
            </NavLink>
            <NavLink to="/coffees">
              <a>Coffees</a>
            </NavLink>
            <NavLink to="dashboard">
              <a>Dashboard</a>
            </NavLink>
          </ul>
        </div>
        <Link to="/" className="text-2xl">
          Coffee Shop
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-bold gap-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${isActive ? "text-warning" : "hover:text-warning"}`
            }
          >
            <a>Home</a>
          </NavLink>
          <NavLink
            to="/coffees"
            className={({ isActive }) =>
              `${isActive ? "text-warning" : "hover:text-warning"}`
            }
          >
            <a>Coffees</a>
          </NavLink>
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `${isActive ? "text-warning" : "hover:text-warning"}`
            }
          >
            <a>Dashboard</a>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};
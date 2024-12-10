import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    const link = (
      <>
        <NavLink
          to={`/`}
          className={({ isActive }) =>
            `px-4 py-2 rounded ${
              isActive ? "bg-green-500" : "bg-transparent hover:bg-red-400"
            }`
          }
        >
          Home
        </NavLink>
        <NavLink
          to={`/emoloyee`}
          className={({ isActive }) =>
            `px-4 py-2 rounded ${
              isActive ? "bg-green-500" : "bg-transparent hover:bg-red-400"
            }`
          }
        >
          Employee
        </NavLink>
        <NavLink
          to={`/job-circular`}
          className={({ isActive }) =>
            `px-4 py-2 rounded ${
              isActive ? "bg-green-500" : "bg-transparent hover:bg-red-400"
            }`
          }
        >
          Job Circular
        </NavLink>
        <NavLink
          to={`/blogs`}
          className={({ isActive }) =>
            `px-4 py-2 rounded ${
              isActive ? "bg-green-500" : "bg-transparent hover:bg-red-400"
            }`
          }
        >
          Blogs
        </NavLink>
        <NavLink
          to={`/conatact-us`}
          className={({ isActive }) =>
            `px-4 py-2 rounded ${
              isActive ? "bg-green-500" : "bg-transparent hover:bg-red-400"
            }`
          }
        >
          Contact us
        </NavLink>
      </>
    );
  return (
    <>
      <div className="navbar bg-base-100">
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
              {
                link
              }
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-5">
           {
            link
           }
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </>
  );
};

export default NavBar;

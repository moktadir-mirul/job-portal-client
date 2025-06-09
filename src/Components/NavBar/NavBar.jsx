import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../AuthProvider/AuthCOntext";

const NavBar = () => {
  const { user, signOutUser } = useContext(AuthContext);

  const handleLogOut = () => {
      signOutUser();
  }
  const links = (
    <>
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/addjob"}>Add Job</NavLink>
      {user && <>
        <NavLink to={"/myjobs"}>My Applied jobs</NavLink>
        <NavLink to={"/mypostedjobs"}>My Posted jobs</NavLink>
      </>}
      
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
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
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow gap-5"
            >
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Career Code</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-5">{links}</ul>
        </div>
        <div className="navbar-end gap-2 flex-col md:flex-row">
          {user ? (
            <>
              <img
                className="w-14 h-14 rounded-full ring-2 ring-blue-500"
                src={user.photoURL}
                alt=""
              />
              <button onClick={handleLogOut} className="btn btn-info">Log Out</button>
            </>
          ) : (
            <>
              <Link to={"/login"}>
                <button className="btn">Log In</button>
              </Link>
              <Link to={"/register"}>
                <button className="btn btn-secondary">Register</button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;

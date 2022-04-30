import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink, useNavigate } from "react-router-dom";
import auth from "../../Firebase/Firebase.init";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const logOut = () => {
    signOut(auth);
  };
  return (
    <nav className="bg-black">
      <div className="flex container mx-auto h-20 items-center justify-between">
        <div className="logo">
          <h2
            onClick={() => navigate("/")}
            className="text-2xl font-bold text-white"
          >
            Laptop Hub
          </h2>
        </div>
        <div className="nav-link">
          <NavLink
            className={({ isActive }) => (isActive ? "active-link" : "link")}
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "active-link" : "link")}
            to="/inventory"
          >
            Inventory
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "active-link" : "link")}
            to="/blogs"
          >
            Blogs
          </NavLink>
        </div>
        <div>
          {user ? (
            <button
              onClick={logOut}
              className="bg-blue-500 py-[7px] shadow shadow-blue-500 px-7 rounded-md text-lg font-semibold text-white"
            >
              Log Out
            </button>
          ) : (
            <button
              onClick={() => navigate("/login")}
              className="bg-blue-500 py-[7px] shadow shadow-blue-500 px-7 rounded-md text-lg font-semibold text-white"
            >
              Log In
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

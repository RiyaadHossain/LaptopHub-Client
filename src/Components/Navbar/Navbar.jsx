import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="bg-slate-200">
      <div className="flex container mx-auto h-20 items-center justify-between">
        <div className="logo">
          <h2 className="text-2xl font-bold">Logo</h2>
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
      </div>
    </nav>
  );
};

export default Navbar;

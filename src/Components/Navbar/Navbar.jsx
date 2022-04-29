import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate()
  return (
    <nav className="bg-black">
      <div className="flex container mx-auto h-20 items-center justify-between">
        <div className="logo">
          <h2 onClick={() => navigate('/')} className="text-2xl font-bold text-white">Laptop</h2>
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

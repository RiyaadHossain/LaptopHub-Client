import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import { NavLink, useNavigate } from "react-router-dom";
import auth from "../../Firebase/Firebase.init";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  
  const logOut = () => {
    signOut(auth);
    toast.success('Logged Out', {id:'test1'})
  };
  return (
    <nav className="bg-black">
      <div className="flex flex-col lg:flex-row container mx-auto lg:h-20 items-center justify-between py-6">
        <div className="logo">
          <h2
            onClick={() => navigate("/")}
            className="text-2xl font-bold text-white"
          >
            Laptop Hub
          </h2>
        </div>
        <div className="nav-link lg:my-0 my-6">
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
          {user?.emailVerified ? (
            <div className="flex flex-col lg:flex-row items-center">
              <div>
                <NavLink
                  to="/manageitems"
                  className={({ isActive }) =>
                    isActive ? "active-link" : "link"
                  }
                >
                  Manage Items
                </NavLink>
                <NavLink
                  to="/additem"
                  className={({ isActive }) =>
                    isActive ? "active-link" : "link"
                  }
                >
                  Add Item
                </NavLink>
                <NavLink
                  to="myitems"
                  className={({ isActive }) =>
                    isActive ? "active-link" : "link"
                  }
                >
                  My Items
                </NavLink>
              </div>
              <button
                onClick={logOut}
                className="ml-5 lg:mt-0 mt-4 bg-blue-500 py-[7px] shadow shadow-blue-500 px-7 rounded-md text-lg font-semibold text-white"
              >
                Log Out
              </button>
            </div>
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

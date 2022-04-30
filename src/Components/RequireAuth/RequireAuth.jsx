import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../Firebase/Firebase.init";
import "./RequireAuth.css";

const RequireAuth = ({ children }) => {
  const [user, loding] = useAuthState(auth);
  let location = useLocation();

  if (loding) {
    return (
      <div className="h-[80vh] flex items-center justify-center bg-[#070707]">
        <svg className="loading" viewBox="25 25 50 50">
          <circle r="20" cy="50" cx="50"></circle>
        </svg>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default RequireAuth;

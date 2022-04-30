import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../../Firebase/Firebase.init";

const LogIn = () => {
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";
  navigate(from, { replace: true });

  const onFormSubmit = (e) => {
    e.preventDefault();
  };

  
  return (
    <div className="h-[80vh] lg:h-[90vh] bg-[#060606]">
      <h1 className="text-3xl mb-7 pt-16 font-bold text-center text-white">
        Log In
      </h1>
      <div className="bg-slate-200 w-[500px] mx-auto py-12 px-3 rounded">
        <form onSubmit={onFormSubmit}>
          <input
            className="block mb-4 py-3 w-full pl-3"
            type="text"
            name="email"
            placeholder="Email"
          />
          <input
            className="block mb-4 py-3 w-full pl-3"
            type="text"
            name="password"
            placeholder="Password"
          />
          <input
            className="bg-blue-500 py-2 px-8 rounded text-slate-100"
            type="submit"
            value="Log In"
          />
        </form>
        <div className="flex justify-between mt-2">
          <button className="text-right text-blue-600">Reset Password</button>
          <button
            onClick={() => navigate("/signup")}
            className="text-right text-blue-600"
          >
            Create an account
          </button>
        </div>
      </div>
      <div className="text-center">
        <button onClick={() => signInWithGoogle()} className="bg-slate-200 border-[3px] border-blue-500 mt-10 text-center w-[500px] mx-auto rounded">
          <h2 className="py-3 text-2xl font-semibold pl-3">
            Continue with <span className="text-blue-500"> G</span>
            <span className="text-red-400">o</span>
            <span className="text-yellow-500">o</span>
            <span className="text-blue-500">g</span>
            <span className="text-green-500">l</span>
            <span className="text-red-500">e</span>
          </h2>
        </button>
      </div>
    </div>
  );
};

export default LogIn;

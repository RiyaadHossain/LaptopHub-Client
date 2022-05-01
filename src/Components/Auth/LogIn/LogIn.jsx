
import React, { useEffect, useState } from "react";
import {
  useAuthState,
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../../Firebase/Firebase.init";
import Spinner from "../../Spinner/Spinner";

const LogIn = () => {
  const [authUser] = useAuthState(auth)
  const [signInWithGoogle, googleUser] = useSignInWithGoogle(auth);
  const [sendPasswordResetEmail, loading] = useSendPasswordResetEmail(auth);
  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";
  
  const [email, setEmail] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });
  const [errorMsg, setMsgError] = useState();

  // Email and Password
  const [signInWithEmailAndPassword, user, error] =
    useSignInWithEmailAndPassword(auth);

  const onEmailBlur = (e) => {
    const email = e.target.value;

    setEmail({ value: email, error: "" });
  };
  const onPasswordBlur = (e) => {
    const password = e.target.value;

    setPassword({ value: password, error: "" });
  };

  useEffect(() => {
    if (user || googleUser) {
      navigate(from, { replace: true });
      toast.success("Logged In");
      setMsgError("");
    }
    if (loading) {
      return <Spinner />;
    }
    if (error) {
      if (error) {
        // toast.error("Email and Password didn't match", {id: 'test'});
      }
    }
  }, [user, googleUser, error, loading, from, navigate]);

  //Function: Reset Password
  const resetPass = async() => {
    if (email.value === "") {
      setEmail({
        value: "",
        error: "Please Enter Email to Reset Password",
      });
      setPassword({ value: "", error: "" });
    } else {
      toast.success("Email Sent");
      await sendPasswordResetEmail(email.value);
      window.location.reload()
    }
  }

  // Form Submit Function
  const onFormSubmit = (e) => {
    e.preventDefault();
    if (email.value === "") {
      setEmail({ value: "", error: "Email is Required" });
    }
    if (password.value === "") {
      setPassword({ value: "", error: "Password is Required" });
    }
    if (email.value && password.value) {
      signInWithEmailAndPassword(email.value, password.value);
    }
  };

  // For JWT Token
  if (authUser) {
    fetch("http://localhost:4000/login", {
      method: 'POST',
      body: JSON.stringify({
          email: authUser.email
      }),
      headers: {
          'Content-type': 'application/json',
      },
  })
      .then((response) => response.json())
      .then((data) => {
          localStorage.setItem("accessToken", data.token);
          navigate(from, { replace: true });
      });
  }

  return (
    <div className="h-[80vh] lg:h-[90vh] bg-[#060606]">
      <h1 className="text-3xl mb-7 pt-16 font-bold text-center text-white">
        Log In
      </h1>
      <div className="bg-slate-200 w-[500px] mx-auto py-12 px-3 rounded">
        <form onSubmit={onFormSubmit}>
          <input
            onBlur={onEmailBlur}
            className="block outline-none mt-4 py-3 w-full pl-3"
            type="text"
            name="email"
            placeholder="Email"
          />
          {email.error && <p className="text-red-600">⚠️ {email.error}</p>}
          <input
            onBlur={onPasswordBlur}
            className="block outline-none mt-4 py-3 w-full pl-3"
            type="password"
            name="password"
            placeholder="Password"
          />
          {password.error && (
            <p className="text-red-600">⚠️ {password.error}</p>
          )}
          <input
            className="bg-blue-500 py-2 mt-5 px-8 rounded text-slate-100"
            type="submit"
            value="Log In"
          />
        </form>
        {errorMsg && <p className="text-red-600 mt-4">{errorMsg}</p>}
        <div className="flex justify-between mt-2">
          <button
            onClick={resetPass}
            className="text-right text-blue-600"
          >
            Reset Password
          </button>
          <button
            onClick={() => navigate("/signup")}
            className="text-right text-blue-600"
          >
            Create an account
          </button>
        </div>
      </div>
      <div className="text-center">
        <button
          onClick={() => signInWithGoogle()}
          className="bg-slate-200 border-[3px] border-blue-500 mt-10 text-center w-[500px] mx-auto rounded"
        >
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

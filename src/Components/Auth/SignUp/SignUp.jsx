import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../../Firebase/Firebase.init";
import toast from "react-hot-toast";

const SignUp = () => {
  const [authUser] = useAuthState(auth);
  const [createUserWithEmailAndPassword, user, , error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [signInWithGoogle, googleUser] = useSignInWithGoogle(auth);
  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const [email, setEmail] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });
  const [confirmPassword, setConfirmPassword] = useState({
    value: "",
    error: "",
  });
  const onEmailBlur = (e) => {
    const email = e.target.value;
    if (/\S+@\S+\.\S+/.test(email)) {
      setEmail({ value: email, error: "" });
    } else {
      setEmail({ value: "", error: "Email is Invalid" });
    }
  };
  const onPasswordBlur = (e) => {
    const password = e.target.value;
    if (password.length > 5) {
      setPassword({ value: password, error: "" });
    } else {
      setPassword({ value: "", error: "Must contain atleast 6 characters" });
    }
  };
  const onConfirmPasswordBlur = (e) => {
    const confirmPassword = e.target.value;
    if (password.value === confirmPassword) {
      setConfirmPassword({ value: confirmPassword, error: "" });
    } else {
      setConfirmPassword({ value: "", error: "Password didn't match" });
    }
  };

  useEffect(() => {
    if (user || googleUser) {
      navigate(from, { replace: true });
    }
    if (error) {
      toast.error("An Error Occurred");
    }
  }, [user, googleUser, error, navigate, from]);

  // Function: Form Submit
  const onFormSubmit = async (e) => {
    e.preventDefault();
    if (email.value === "") {
      setEmail({ value: "", error: "Email is Required" });
    }
    if (password.value === "") {
      setPassword({ value: "", error: "Password is Required" });
    }
    if (confirmPassword.value === "") {
      setPassword({ value: "", error: "Confirm Password is Required" });
    }
    if (email.value && password.value === confirmPassword.value) {
      toast.success("Varification Mail Sent");
      await createUserWithEmailAndPassword(email.value, password.value);
    }
  };

  // For JWT Token
  if (authUser) {
    fetch("https://nameless-peak-52281.herokuapp.com/login", {
      method: "POST",
      body: JSON.stringify({
        email: authUser.email,
      }),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        localStorage.setItem("accessToken", data.token);
        navigate(from, { replace: true });
      });
  }

  return (
    <div className="h-[90vh] bg-[#060606]">
      <h1 className="text-3xl mb-7 pt-20 font-bold text-center text-white">
        Sign Up
      </h1>
      <div className="bg-slate-200 max-w-[500px] mx-auto py-12 px-3 rounded">
        <form onSubmit={onFormSubmit}>
          <input
            className="block outline-none mb-4 py-3 w-full pl-3"
            type="text"
            name="name"
            placeholder="Name"
          />
          <input
            onBlur={onEmailBlur}
            className="block outline-none mt-4 py-3 w-full pl-3"
            type="email"
            name="email"
            placeholder="Email"
          />
          {email.error && <p className="text-red-600">⚠️ {email.error}</p>}
          <input
            className="block outline-none mt-4 py-3 w-full pl-3"
            type="password"
            name="password"
            placeholder="Password"
            onBlur={onPasswordBlur}
          />
          {password.error && (
            <p className="text-red-600">⚠️ {password.error}</p>
          )}
          <input
            className="block outline-none mt-4 py-3 w-full pl-3"
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            onBlur={onConfirmPasswordBlur}
          />
          {confirmPassword.error && (
            <p className="text-red-600">⚠️ {confirmPassword.error}</p>
          )}
          <input
            className="bg-blue-500 py-2 mt-4 px-8 rounded text-slate-100"
            type="submit"
            value="Sign Up"
          />
        </form>

        <div className="text-right">
          <button onClick={() => navigate("/login")} className=" text-blue-600">
            Already have an Account
          </button>
        </div>
      </div>
      <div className="text-center">
        <button
          onClick={() => signInWithGoogle()}
          className="bg-slate-200 border-[3px] border-blue-500 mt-10 text-center max-w-[500px] mx-auto rounded"
        >
          <h2 className="py-3 text-2xl font-semibold pl-6">
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

export default SignUp;

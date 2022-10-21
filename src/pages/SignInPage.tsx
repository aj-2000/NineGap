import React, { useRef, useState } from "react";
import Header from "../components/layout/Header";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const SignInPage = () => {
  const emailRef = useRef<any>();
  const passwordRef = useRef<any>();

  let navigate = useNavigate();
  const handleSignIn = (e: any) => {
    e.preventDefault();
    console.log("signin");
    if (emailRef.current?.value !== "" && passwordRef.current?.value !== "") {
      const userBody = {
        email: emailRef.current?.value,
        password: passwordRef.current?.value,
      };
      console.log(userBody);
      axios
        .post("http://localhost:5001/login", userBody)
        .then((response) => navigate("/dashboard"))
        .catch();
    }
  };
  return (
    <div>
      <div className="h-[100vh] overflow-scroll md:overflow-hidden">
        <Header />
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-col md:pb-[5000px] items-center gap-y-8 min-w-[40%] bg-slate-200 py-auto overflow-scroll">
            <img
              className="max-w-[180px] md:max-w-[500px] mx-2 mt-28"
              src="https://us01st-cf.zoom.us/fe-static/fe-signup-login-active/img/banner-step-2.4b72ef61.png"
            />
          </div>
          <div className="min-w-[60%] pb-4 md:pb-[5000px] flex flex-col justify-center items-center gap-y-8 mt-12 md:mt-0 overflow-scroll">
            <span className="text-4xl font-medium">Sign In</span>
            <form className="flex flex-col justify-center items-center gap-y-8">
              <div className="flex flex-col items-center gap-y-6">
                <input
                  className="rounded-sm border-1 border p-2 w-[320px]"
                  id="email"
                  type="email"
                  placeholder="Email Address"
                  required
                  ref={emailRef}
                />
              </div>

              <div className="flex flex-col items-center gap-y-6">
                <input
                  className="rounded-sm border-1 border p-2 w-[320px]"
                  id="password"
                  type="password"
                  placeholder="Password"
                  required
                  ref={passwordRef}
                />
              </div>

              <div onClick={handleSignIn} className="flex flex-col w-[320px] cursor-pointer">
                <span className="text-sm text-center text-gray-400 font-medium py-2 bg-gray-200 rounded-lg px-auto min-w-[320px]">
                  Sign In
                </span>
              </div>
            </form>
            <span className="text-xs text-gray-500">Or continue with</span>
            <div className="flex gap-x-8 justify-between">
              <a
                className="w-[2.5rem] flex flex-col gap-y-2 justify-center items-center "
                href="http://localhost:5001/auth/google"
              >
                <div className="flex justify-center border rounded-xl py-2 px-2">
                  <FcGoogle className="text-lg" />
                </div>
                <span className="text-xs text-gray-500 text-center">
                  Google
                </span>
              </a>

              <a
                className="w-[2.5rem] flex flex-col gap-y-2 justify-center items-center "
                href="http://localhost:5001/auth/facebook"
              >
                <div className="flex justify-center border rounded-xl py-2 px-2">
                  <FaFacebook className="text-lg text-[#3954c0]" />
                </div>
                <span className="text-xs text-gray-500 text-center">
                  Facebook
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;

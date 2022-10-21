import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
axios.defaults.withCredentials = true;
axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";
const Header = ({ isLoggedIn, profilePhoto = "" }: any) => {
  let navigate = useNavigate();
  const handleLogout = () => {
    axios
      .get("http://localhost:5001/logout")
      .then(() => {
        navigate("/sign-in");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="flex text-xl items-center justify-between px-4 py-2 shadow">
      <div className="font-mono font-extrabold text-blue-600 uppercase">
        NineGap
      </div>
      <div className="flex text-xs text-blue-500 font-medium items-center gap-x-6 md:gap-x-8">
        {!isLoggedIn ? (
          <>
            <Link to="/sign-in" className="uppercase">
              Sign In
            </Link>
            <Link to="/sign-up" className="uppercase">
              Sign Up
            </Link>
          </>
        ) : (
          <>
            <span onClick={handleLogout} className="uppercase cursor-pointer">
              Logout
            </span>
            <span>
              <img className="w-8 h-8 rounded-lg" src={profilePhoto} />
            </span>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;

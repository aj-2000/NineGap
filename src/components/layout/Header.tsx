import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex text-xl items-center justify-between px-4 py-2 shadow">
      <div className="font-mono font-extrabold text-blue-600">NineGap Dashboard</div>
      <div className="flex text-xs text-blue-500 font-medium items-center gap-x-6 md:gap-x-8">
      <Link to="/sign-in">Sign In</Link>
        <Link to="/sign-up">Sign Up</Link>
        <span>
          <img className="w-8 h-8 rounded-lg" src="https://lh3.googleusercontent.com/a-/ACNPEu-ZEq2Jnz5X34P-Kc2LfSVP0qKOzyEB0uKNSP_KdQ=s96-c" />
        </span>
      </div>
    </div>
  );
};

export default Header;

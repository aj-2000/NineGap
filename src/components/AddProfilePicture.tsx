import React from "react";
import { CgProfile } from "react-icons/cg";
import { AiFillCamera } from "react-icons/ai";
const AddProfilePicture = ({image}:any) => {
  return (
    <div className="relative md:mt-8">
      <div className="text-blue-900 w-54 h-54">
        { image !== "" && <img className="rounded-full" src="https://lh3.googleusercontent.com/a-/ACNPEu-ZEq2Jnz5X34P-Kc2LfSVP0qKOzyEB0uKNSP_KdQ=s96-c"/>}
        {image === image && <CgProfile className="" size={100} />}
      </div>
      <div className="absolute left-[70%] bottom-[5%] ">
        <AiFillCamera className="bg-blue-900 border-[3px] border-white text-white p-2 rounded-full" size={40} />
      </div>
    </div>
  );
};

export default AddProfilePicture;

import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";
const BasicAccountCard = () => {
  return (
    <div className="flex flex-col bg-white shadow-md rounded-2xl p-6 gap-y-3 max-w-[350px] mx-2">
      <span className="text-xl font-medium">Create you free Basic account</span>
      <div className="flex items-center">
        <AiFillCheckCircle className="text-xl text-green-500 mr-2" />
        <span className="text-xs">Meetings with up to 100 participants</span>
      </div>
      <div className="flex items-center">
        <AiFillCheckCircle className="text-xl text-green-500 mr-2" />
        <span className="text-xs">Unlimited number of meetings up to 40 minutes each</span>
      </div>
      <div className="flex items-center">
        <AiFillCheckCircle className="text-xl text-green-500 mr-2" />
        <span className="text-xs">secure, HD quality audio and volume</span>
      </div>
      <div className="flex items-center">
        <AiFillCheckCircle className="text-xl text-green-500 mr-2" />
        <span className="text-xs">Screen sharing</span>
      </div>
      <div className="flex items-center">
        <AiFillCheckCircle className="text-xl text-green-500 mr-2" />
        <span className="text-xs">Team chat for collaboration out of meetings</span>
      </div>
      <div className="flex items-center">
        <AiFillCheckCircle className="text-xl text-green-500 mr-2" />
        <span className="text-xs">Join form mobile, desktop, and your favorite apps</span>
      </div>
     
    </div>
  );
};

export default BasicAccountCard;

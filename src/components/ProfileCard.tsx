import React from "react";

const ProfileCard = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <p className="font-extralight text-6xl text-blue-700">WELCOME!</p>
      <div className="w-[200px] h-[200px] rounded-full">
        <img
          className="rounded-full shadow-lg"
          src="https://media-exp1.licdn.com/dms/image/C4D03AQHj-Uul_quJmA/profile-displayphoto-shrink_400_400/0/1663409602983?e=1671667200&v=beta&t=WkNYWx_QKXikRslJfBZOxUXZlQG6BwbhCVAo6EfXv_U"
        />
      </div>
      <p className="text-4xl text-blue-700 font-extralight">Ajay Sharma</p>
      <p className="text-lg font-mono">hi@ajaysharma.dev</p>
    </div>
  );
};

export default ProfileCard;

import React, { useEffect, useState } from "react";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import axios from "axios";
import { useNavigate } from "react-router-dom";
axios.defaults.withCredentials = true;
axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";
const Dashboard = () => {
  const [userData, setUserData] = useState<any>();
  let navigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:5001/me")
      .then((res) => {
        setUserData(res.data.user);
      })
      .catch(() => navigate("/sign-in"));
  }, []);
  return (
    <div className="flex flex-col h-[100vh] overflow-scroll md:overflow-hidden">
      <Header isLoggedIn={true} profilePhoto={userData?.profilePhoto} />
      <div className="h-full w-full flex justify-center items-center">
        <div className="flex flex-col justify-center items-center gap-4">
          <p className="font-extralight text-6xl text-blue-700">WELCOME!</p>
          <div className="w-[200px] h-[200px] rounded-full object-cover overflow-clip">
            <img
              loading="lazy"
              className="rounded-full shadow-lg"
              src={userData?.profilePhoto}
            />
          </div>
          <p className="text-4xl text-blue-700 font-extralight">{`${userData?.firstName} ${userData?.lastName}`}</p>
          <p className="text-lg font-mono">{userData?.email}</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;

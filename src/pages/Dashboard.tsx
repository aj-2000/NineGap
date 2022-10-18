import React from "react";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import ProfileCard from "../components/ProfileCard";

const Dashboard = () => {
  return (
    <div className="flex flex-col h-[100vh] overflow-scroll md:overflow-hidden">
      <Header />
      <div className="h-full w-full flex justify-center items-center">
        <ProfileCard />
      </div>
      <Footer/>
    </div>
  );
};

export default Dashboard;

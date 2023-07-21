import React from "react";
import Home from "../HomePage/HomeContainer/Home";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <h3>Footer</h3>
    </div>
  );
};

export default MainLayout;

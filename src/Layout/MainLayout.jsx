import React from "react";
import Home from "../HomePage/HomeContainer/Home";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import BackToTopButton from "../Components/BackToTopButton";
import Footer from "../Components/Footer";

const MainLayout = () => {
  return (
    <div className="scroll-smooth">
      <Navbar />
      <Outlet />
      <BackToTopButton />
      <Footer />
    </div>
  );
};

export default MainLayout;

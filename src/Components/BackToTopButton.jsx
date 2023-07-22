import React, { useEffect, useState } from "react";
import "./BackToTopButton.css"; // Create this CSS file to hold our custom styles
import { FaArrowCircleUp } from "react-icons/fa";

const BackToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    // Check the scroll position to show or hide the button
    const scrollY = window.scrollY;
    const showButtonThreshold = 300; // Adjust this value as needed

    if (scrollY > showButtonThreshold) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const scrollToTop = () => {
    // Smoothly scroll to the top of the page when the button is clicked
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Attach scroll event listener when the component mounts
  // and remove it when the component unmounts
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      className={`back-to-top-button btn-circle bg-sky-500 ${
        showButton ? "visible" : ""
      }`}
      onClick={scrollToTop}
    >
      <FaArrowCircleUp className="text-white" />
    </button>
  );
};

export default BackToTopButton;

"use client";
import { useState, useEffect } from "react";
import "./globals.css"; // Ensure you have the necessary CSS

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  // Check if the user has scrolled down and show the button
  const handleScroll = () => {
    if (window.scrollY > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scroll effect
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    isVisible && (
      <div
        className="rotated-arrow"
        onClick={scrollToTop}
        title="Scroll to top"
      >
      <button></button>
      </div>
    )
  );
}

export default ScrollToTopButton;

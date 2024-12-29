'use client';

import { useState, useEffect } from "react";
import styles from "./SlidingText.module.css"; // Import the CSS module

const SlidingText = () => {
  const qualities = ["Frontend Developer","Backend Developer","Drupal Developer","Problem Solver", "Tech Enthusiast"];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % qualities.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [qualities.length]);

  return (
    <h3 className={styles.container}>
      I'm a &nbsp;{"  "}
      <span
        className={`${styles.slidingText} ${styles[`slide-${currentIndex % 2 === 0 ? "left" : "right"}`]}`}
      >
        {qualities[currentIndex]}.
      </span>
    </h3>
  );
};

export default SlidingText;

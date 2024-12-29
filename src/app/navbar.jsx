'use client';
import React, { useState } from "react";
import Link from "next/link";
import "./globals.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">AMV</div>
      <div className={`hamburger ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={`navLinks ${isOpen ? "active" : ""}`}>
        <li><Link href="#about">About</Link></li>
        <li><Link href="#skills">Skills</Link></li>
        <li><Link href="#projects">Projects</Link></li>
        <li><Link href="#experience">Experience</Link></li>
        <li><Link href="#contact">Contact</Link></li>
        <li><a href="/Resume_athul_Junior_Data_Drupal_Engineer.pdf" download="Resume_Athul_Mathew">Resume</a></li>
      </ul>
    </nav>
  );
}

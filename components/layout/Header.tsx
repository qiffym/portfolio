"use client";
import React, { useState } from "react";
import Navbar from "./Navbar";

const Header = () => {
  const [navbarFixed, setNavbarFixed] = useState(false);
  const changeNavbarFixed = () => {
    if (window.scrollY !== 0) {
      setNavbarFixed(true);
    } else {
      setNavbarFixed(false);
    }
  };
  window.addEventListener("scroll", changeNavbarFixed);
  return (
    <header
      className={`absolute top-0 left-0 z-10 flex w-full items-center bg-transparent ${
        navbarFixed && "navbar-fixed"
      }`}
    >
      <Navbar />
    </header>
  );
};

export default Header;

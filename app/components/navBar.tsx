"use client";
import React, { useState, useEffect } from "react";

import LogoAnimateB from "./logoAnimateB";
import Link from "next/link";
import Hoverable from "./hoverAble";
import MobileMenu from "./navbar/mobileMenu";

const NavBar: React.FC = () => {
  // const [isVisible, setIsVisible] = useState(true);
  // const [lastScrollY, setLastScrollY] = useState(0);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY > lastScrollY) {
  //       setIsVisible(false); // Hide on scroll down
  //     } else {
  //       setIsVisible(true); // Show on scroll up
  //     }
  //     setLastScrollY(window.scrollY);
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full flex items-center justify-between px-4 sm:px-8 py-3 bg-transparent transition-transform duration-700 `}
    >
      {/* Logo on the left */}
      <Link href="/">
        <LogoAnimateB />
      </Link>

      {/* Navigation Links - Centered */}
      <div className="hidden sm:flex">
        <button className="relative w-32 px-6 py-2 text-white bg-white/10 backdrop-blur-md shadow-md skew-x-[-20deg]  hover:bg-[rgb(0,92,92)] transition">
          <span className="inline-block skew-x-[20deg]">About Me</span>
        </button>
        <button className="relative w-32 px-6 py-2 text-white bg-white/10 backdrop-blur-md shadow-md skew-x-[-20deg] hover:bg-[#005c5c] transition">
          <span className="inline-block skew-x-[20deg] ">Projects</span>
        </button>
      </div>
      {/* "Let's Talk" button on the right */}
      {/* <Hoverable hoverText="[ Let's talk ]">
        <button className="relative text-sm sm:text-base w-56 sm:w-64  px-4 py-2 text-white bg-white/10 backdrop-blur-md shadow-md skew-x-[-20deg]  transition">
          <span className="absolute skew-x-[20deg] h-2 w-2 rounded-full top-3.5 sm:top-4 left-4 sm:left-4 bg-green-400 animate-pulse  "></span>
          <span className="inline-block skew-x-[20deg]">
            Available from March
          </span>
        </button>
      </Hoverable> */}

      <MobileMenu/>
    </nav>
  );
};

export default NavBar;

/* ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }*/

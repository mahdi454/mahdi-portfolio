"use client";
import React, { useState, useEffect } from "react";

import LogoAnimateB from "./logoAnimateB";
import Link from "next/link";
import Hoverable from "./hoverAble";
import MobileMenu from "./navbar/mobileMenu";
import { Clock } from "lucide-react";

const NavBar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsVisible(false); // Hide on scroll down
      } else {
        setIsVisible(true); // Show on scroll up
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);
  return (

    <div className={` fixed top-0 z-10  w-full   ${isVisible ? "translate-y-0" : "-translate-y-full pb-2"}`}>
      <nav className=" mx-auto w-full  max-w-screen-2xl flex items-center justify-between   bg-transparent pr-4 pt-6 ">
        {/* Logo on the left */}
        <Link href="/" className="relative w-10 md:w-60 h-10 -translate-x-4">
          <LogoAnimateB />
        </Link>


        {/* Navigation Links - Centered */}
        <Hoverable

          hoverText=" "
          cursorColor="white"
          borderColor="slate-100"
          blurAmount="[1px]"  // sm, md, lg, xl, 2xl, etc.
          bgOpacity="10"   // 5, 10, 20, etc. (percentage)
        >

          <div className="hidden md:flex  justify-center items-center ">
            <Link href='/' className="relative w-32 px-6 py-3 text-white bg-white/10 backdrop-blur-md shadow-md skew-x-[-20deg]  hover:bg-[rgb(0,92,92)] transition text-center">
              <span className="inline-block skew-x-[20deg]">Home</span>
            </Link>
            <Link href='/about' className="relative w-32 px-6 py-3 text-white bg-white/10 backdrop-blur-md shadow-md skew-x-[-20deg]  hover:bg-[rgb(0,92,92)] transition">
              <span className="inline-block skew-x-[20deg]">About Me</span>
            </Link>
            <Link href='/project' className="relative w-32 px-6 py-3 text-white bg-white/10 backdrop-blur-md shadow-md skew-x-[-20deg] hover:bg-[#005c5c] transition">
              <span className="inline-block skew-x-[20deg] ">Projects</span>
            </Link>
          </div>
        </Hoverable>
        <div className="hidden  md:flex items-center gap-2">
          <span className=" text-emerald-500 animate-pulse  "> <Clock size={20} /></span>
          <span className="text-slate-300">
            07:17:35 PM India, Bangalore
          </span>
        </div>

        <MobileMenu />
      </nav>
    </div>
  );
};

export default NavBar;



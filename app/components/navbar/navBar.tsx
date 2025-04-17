"use client";
import React, { useState, useEffect } from "react";
import LogoAnimateB from "../logoAnimateB";
import Link from "next/link";
import MobileMenu from "./mobileMenu";
import { Clock } from "lucide-react";
import Hoverable from "../hoverAble";

const NavBar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [currentTime, setCurrentTime] = useState("");

  // Handle scroll hide/show
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
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Clock setup
  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString("en-IN", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
        timeZone: "Asia/Kolkata",
      });
      setCurrentTime(timeString);
    };

    updateClock(); // initial run
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`fixed top-0 z-10 w-full transition-transform duration-500 ease-in-out pb-2 ${isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
    >
      <nav className="mx-auto w-full max-w-screen-2xl flex items-center justify-between bg-transparent pr-4 pt-6">
        {/* Logo on the left */}
        <Link href="#" className="relative w-10 md:w-60 h-10 -translate-x-4">
          <LogoAnimateB />
        </Link>

        {/* Navigation Links */}

        <Hoverable
          hoverText=""
          cursorColor="white"
          borderColor="slate-100"
          blurAmount="[1px]"  // sm, md, lg, xl, 2xl, etc.
          bgOpacity="10"   // 5, 10, 20, etc. (percentage)
        >


          <div className="hidden md:flex justify-center items-center">
            <a
              href="#"
              className="relative w-28 p-3 text-white bg-white/10 backdrop-blur-md shadow-md skew-x-[-20deg] hover:bg-[rgb(0,92,92)] transition text-center"
            >
              <span className="inline-block skew-x-[20deg] ">Home</span>
            </a>
            <a
              href="#about"
              className="relative w-28 p-3 text-white bg-white/10 backdrop-blur-md shadow-md skew-x-[-20deg] hover:bg-[rgb(0,92,92)] transition text-center"
            >
              <span className="inline-block skew-x-[20deg] ">About</span>
            </a>
            <a
              href="#skills"
              className="relative w-28 p-3 text-white bg-white/10 backdrop-blur-md shadow-md skew-x-[-20deg] hover:bg-[rgb(0,92,92)] transition text-center"
            >
              <span className="inline-block skew-x-[20deg] ">Skills</span>
            </a>
            <a
              href="#projects"
              className="relative w-28 p-3 text-white bg-white/10 backdrop-blur-md shadow-md skew-x-[-20deg] hover:bg-[#005c5c] transition text-center"
            >
              <span className="inline-block skew-x-[20deg] ">Projects</span>
            </a>
          </div>
        </Hoverable>

        {/* Clock */}
        <div className="hidden md:flex items-center gap-2">
          <span className="text-emerald-500 animate-pulse">
            <Clock size={20} />
          </span>
          <span className="text-slate-300 font-semibold">{currentTime}</span>
          <span>Bangalore, India</span>
        </div>

        <MobileMenu />
      </nav>
    </div>
  );
};

export default NavBar;

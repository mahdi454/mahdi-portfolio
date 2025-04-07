import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative md:hidden">
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="p-2 text-[rgb(14,144,144)] bg-white/10 backdrop-blur-sm rounded-md"
      >
      <span ><Menu /></span>
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 bg backdrop-blur-sm transition-opacity"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Slide-down Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-[70vh] bg-white/10 backdrop-blur-xl shadow-md transform ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        } transition-transform duration-500 ease-in-out`}
      >
        {/* Close Button */}
        <button
        onClick={() => setIsOpen(false)}
        className="absolute top-5 right-4 p-2 text-[rgb(14,144,144)] bg-white/10 backdrop-blur-sm rounded-md"
      >
      <span ><X/></span>
      </button>

        {/* Menu Items */}
        <div className="flex flex-col justify-center items-center mt-32 gap-2">
        <button className="relative w-48 px-6 py-2 text-white bg-white/10 backdrop-blur-md shadow-md skew-x-[-20deg]  hover:bg-[rgb(0,92,92)] transition">
          <span className="inline-block skew-x-[20deg]">About Me</span>
        </button>
        <button className="relative w-48 px-6 py-2 text-white bg-white/10 backdrop-blur-md shadow-md skew-x-[-20deg] hover:bg-[#005c5c] transition">
          <span className="inline-block skew-x-[20deg] ">Projects</span>
        </button>
        <button className="relative w-48 px-6 py-2 text-white bg-white/10 backdrop-blur-md shadow-md skew-x-[-20deg] hover:bg-[#005c5c] transition">
          <span className="inline-block skew-x-[20deg] ">Let's Talk</span>
        </button>
      </div>
      </div>
    </div>
  );
}

import { useState } from "react";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="p-2 text-white bg-black/50 backdrop-blur-sm rounded-md"
      >
      <span className="w-6 h- bg-slate-300 h-"></span>
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 bg backdrop-blur-sm transition-opacity"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Slide-down Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-[80vh] bg-white/10 backdrop-blur-md shadow-md transform ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        } transition-transform duration-500 ease-in-out`}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 p-2 text-black bg-white rounded-md"
        >
          ✕
        </button>

        {/* Menu Items */}
        <ul className="mt-16 space-y-4 text-center text-white">
          <li><a href="#home" className="block hover:text-gray-300">Home</a></li>
          <li><a href="#about" className="block hover:text-gray-300">About</a></li>
          <li><a href="#services" className="block hover:text-gray-300">Services</a></li>
          <li><a href="#contact" className="block hover:text-gray-300">Contact</a></li>
        </ul>
      </div>
    </div>
  );
}

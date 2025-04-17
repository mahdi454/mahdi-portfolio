import { SOCIAL_LINKS } from "@/app/lib/data";
import { Github, Linkedin, Menu, Twitter, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { SheetDemo } from "../email/email";

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
          className="fixed h-screen inset-0 bg-black/50  transition-opacity"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Slide-down Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-[75vh] bg-white/10 backdrop-blur-xl rounded-b-md shadow-md transform ${isOpen ? "translate-y-0" : "-translate-y-full"
          } transition-transform duration-500 ease-in-out`}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-5 right-4 p-2 text-[rgb(14,144,144)] bg-white/10 backdrop-blur-sm rounded-md"
        >
          <span ><X /></span>
        </button>

        {/* Menu Items */}
        <div className="flex flex-col justify-center items-center mt-28 gap-4">
          <a
            onClick={() => setIsOpen(false)}
            href="#"
            className="relative w-48 px-6 py-2 text-white bg-white/10 backdrop-blur-md shadow-md skew-x-[-20deg] hover:bg-[#005c5c] transition text-center"
          >
            <span className="inline-block skew-x-[20deg] ">Home</span>
          </a>
          <a
            onClick={() => setIsOpen(false)}
            href="#about"
            className="relative w-48 px-6 py-2 text-white bg-white/10 backdrop-blur-md shadow-md skew-x-[-20deg] hover:bg-[#005c5c] transition text-center"
          >
            <span className="inline-block skew-x-[20deg] ">About</span>
          </a>
          <a
            onClick={() => setIsOpen(false)}
            href="#skills"
            className="relative w-48 px-6 py-2 text-white bg-white/10 backdrop-blur-md shadow-md skew-x-[-20deg] hover:bg-[#005c5c] transition text-center"
          >
            <span className="inline-block skew-x-[20deg] ">Skills</span>
          </a>
          <a
            onClick={() => setIsOpen(false)}
            href="#projects"
            className="relative w-48 px-6 py-2 text-white bg-white/10 backdrop-blur-md shadow-md skew-x-[-20deg] hover:bg-[#005c5c] transition text-center"
          >
            <span className="inline-block skew-x-[20deg] ">Projects</span>
          </a>

        </div>
        <div className="flex justify-center items-center gap-2 flex-col mt-8">
      <SheetDemo/>
          <div className="  backdrop-blur-md shadow-md bg-[#005c5c] transition text-center  py-1 px-4 w-10/12 ">
            <Link href={SOCIAL_LINKS[2].url}>
              <span className="  flex gap-2 items-center justify-center ">

                <span className="text-[hsl(180,100%,35%)]">
                  <Twitter size={18} />
                </span> <span>X(Twitter)</span>
              </span>
            </Link>
          </div>
          <div className="  backdrop-blur-md shadow-md bg-[#005c5c] transition text-center  py-1 px-4 w-8/12 ">
            <Link href={SOCIAL_LINKS[1].url}>
              <span className="  flex gap-2 items-center justify-center ">

                <span className="text-[hsl(180,100%,35%)]">
                  <Linkedin size={18} />
                </span> <span>LinkedIn</span>
              </span>
            </Link>
          </div>
          <div className="  backdrop-blur-md shadow-md bg-[#005c5c] transition text-center  py-1 px-4 w-6/12  ">
            <Link href={SOCIAL_LINKS[0].url}>
              <span className="  flex gap-2 items-center justify-center ">

                <span className="text-[hsl(180,100%,35%)]">
                  <Github size={18} />
                </span> <span>GitHub</span>
              </span>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}

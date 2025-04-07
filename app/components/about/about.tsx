"use client"
import { useRef, useEffect, useState } from "react";
import { IBM_Plex_Mono } from "next/font/google";
import { CarouselSize } from "../picture/years";
import Hoverable from "../hoverAble";
import gsap from "gsap";
import { ArrowRight, ChevronsDown, MoveRight } from "lucide-react";
import Link from "next/link";


const geistSans = IBM_Plex_Mono({
    weight: "400",
    style: "normal",
    subsets: ["latin"],
});

function About() {
    const [activeYear, setActiveYear] = useState("2020");


    // Inside the About component:
    const imageRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        if (imageRef.current) {
            gsap.fromTo(
                imageRef.current,
                {
                    opacity: 0,
                    scale: 0.50,
                    rotate: -50,
                },
                {
                    opacity: 1,
                    scale: 1,
                    rotate: 0,
                    duration: 1.5,
                    ease: "power2.out",
                }
            );
        }
    }, [activeYear]);

    return (
        <section className="mx-auto w-full h-screen max-w-screen-2xl flex flex-col md:flex-row justify-start mt-20 md:justify-center md:mt-0  items-center  text-white ">

            <div className=" md:hidden relative flex flex-col md:flex-row justify-center items-center px-2 sm:px-4 w-full md:w-10/12 md:h-96 ">

                <div className="w-56 h-56 sm:w-68 sm:h-68 md:w-80 md:h-80  lg:w-96 lg:h-96   rounded-full border-[2px] border-emerald-600 o">

                    <img
                        ref={imageRef}
                        src={`${activeYear}.jpg`}
                        alt="Mhadi-Hassani"
                        className=" w-full h-full object-cover rounded-full "
                    />
                </div>

                <Hoverable

                    hoverText="[ scroll ]"
                    cursorColor="white"
                    borderColor="slate-100"
                    blurAmount="sm"  // sm, md, lg, xl, 2xl, etc.
                    bgOpacity="10"   // 5, 10, 20, etc. (percentage)
                >

                    <div className="relative w-8/12 sm:w-7/12 md:w-40 flex  justify-between items-center">
                        <div className="absolute  flex-col justify-between  items-end h-64 hidden md:flex">
                            <span className=" w-20 h-[1px] bg-emerald-500"></span>
                            <span className=" w-12 h-[1px] bg-emerald-500"></span>
                            <span className=" w-20 h-[1px] bg-emerald-500"></span>

                        </div>
                        <div className="absolute flex justify-between  items-end w-full md:hidden mb-20 ml-2 ">
                            <span className=" h-10 w-[1px] bg-emerald-500"></span>
                            <span className=" h-4 w-[1px] bg-emerald-500"></span>
                            <span className=" h-10 w-[1px] bg-emerald-500"></span>

                        </div>
                        <CarouselSize onChangeActiveYear={setActiveYear} />
                    </div>
                </Hoverable>




            </div>

            {/* Name & Introduction */}
            <div className="w-full sm:pl-10 sm:pr-6   px-4 flex   flex-col items-center md:items-start ">
                <h1 className="text-xl sm:text-4xl font-bold  text-gray-300 ">Hey, I'm Mahdi Hassani,</h1>

                <p className="  sm:text-2xl text-gray-500 mt-4 max-w-3xl text-center md:text-start ">
                    A passionate <strong>Full-Stack Web Developer</strong> focused on crafting clean, modern,
                    and user-friendly digital experiences.
                </p>

                {/* Call to Action */}
                <div className="mt-6 mb-6 w-fit mx-auto md:mx-0  md:flex">

                    <Hoverable
                        hoverText="[ Let's talk ]"
                        cursorColor="white"
                        borderColor="slate-100"
                        blurAmount="md"  // sm, md, lg, xl, 2xl, etc.
                        bgOpacity="10"   // 5, 10, 20, etc. (percentage)
                    >

                        <button className="relative text-sm sm:text-base   px-6 py-2 text-white bg-white/10 backdrop-blur-md shadow-md  transition hover:bg-[rgb(0,92,92)] flex items-center gap-1 ">
                            <span className="absolute  h-2 w-2 rounded-full top-3.5 sm:top-4 left-3  bg-green-400 animate-pulse  "></span>
                            Available from March <span className=""><MoveRight size={18} /></span>
                        </button>
                    </Hoverable>

                </div>
            </div>
            {/* Profile Image */}
            <div className=" relative md:flex flex-col md:flex-row justify-center items-center px-2 sm:px-4 w-full md:w-10/12 md:h-96 hidden ">

                <div className="w-60 h-60 sm:w-68 sm:h-68 md:w-80 md:h-80  lg:w-96 lg:h-96   rounded-full border-[2px] border-emerald-600 o">

                    <img
                        ref={imageRef}
                        src={`${activeYear}.jpg`}
                        alt="Mhadi-Hassani"
                        className=" w-full h-full object-cover rounded-full "
                    />
                </div>

                <Hoverable

                    hoverText="[ scroll ]"
                    cursorColor="white"
                    borderColor="slate-100"
                    blurAmount="sm"  // sm, md, lg, xl, 2xl, etc.
                    bgOpacity="10"   // 5, 10, 20, etc. (percentage)
                >

                    <div className="relative w-8/12 sm:w-7/12 md:w-40 flex  justify-between items-center">
                        <div className="absolute  flex-col justify-between  items-end h-64 hidden md:flex">
                            <span className=" w-20 h-[1px] bg-emerald-500"></span>
                            <span className=" w-12 h-[1px] bg-emerald-500"></span>
                            <span className=" w-20 h-[1px] bg-emerald-500"></span>

                        </div>
                        <div className="absolute flex justify-between  items-end w-full md:hidden mb-20 ml-1 ">
                            <span className=" h-10 w-[1px] bg-emerald-500"></span>
                            <span className=" h-4 w-[1px] bg-emerald-500"></span>
                            <span className=" h-10 w-[1px] bg-emerald-500"></span>

                        </div>
                        <CarouselSize onChangeActiveYear={setActiveYear} />
                    </div>
                </Hoverable>




            </div>
            {/* <Hoverable

                hoverText=" "
                cursorColor="white"
                borderColor="slate-100"
                blurAmount="sm"  // sm, md, lg, xl, 2xl, etc.
                bgOpacity="10"   // 5, 10, 20, etc. (percentage)
            >

                <div className="relative">
                    <Link href="/about">

                        <div className=" w-32 h-32 rounded-full border-t border-r border-l border-emerald-500 delay-100 ">
                        </div>

                        <div className=" w-32 h-32 rounded-full border-t border-r border-l border-emerald-500 ">
                        </div>

                        <button className="  flex flex-col items-center gap-2">see more <span><ChevronsDown /></span></button>
                    </Link>
                </div>
            </Hoverable> */}

        </section>

    );
}
export default About;
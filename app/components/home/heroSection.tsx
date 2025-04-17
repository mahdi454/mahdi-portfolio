"use client"
import { useRef, useEffect, useState } from "react";
import { CarouselImage } from "./imageCar";
import Hoverable from "../hoverAble";
import gsap from "gsap";
import Image from "next/image";
import { SheetDemo } from "../email/email";



function HeroSection() {
    const [activeYear, setActiveYear] = useState("2020");


    // Inside the HeroSection component:
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
        <section className="mx-auto w-full h-screen max-w-screen-2xl flex flex-col md:flex-row justify-start mt-28 md:justify-center md:mt-0  items-center  text-white ">

            <div className=" md:hidden relative flex flex-col md:flex-row justify-center items-center px-2 sm:px-4 w-full md:w-10/12 md:h-96 ">

                <div className="w-56 h-56 sm:w-68 sm:h-68 md:w-80 md:h-80  lg:w-96 lg:h-96   rounded-full border-[2px] border-[#008080]">

                    <Image
                        ref={imageRef}
                        src={`/profile/${activeYear}.jpg`}
                        alt="Mhadi-Hassani"
                        className=" w-full h-full object-cover rounded-full "
                        width={400}
                        height={400}

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
                            <span className=" w-20 h-[1px] bg-[#008080]"></span>
                            <span className=" w-12 h-[1px] bg-[#008080]"></span>
                            <span className=" w-20 h-[1px] bg-[#008080]"></span>

                        </div>
                        <div className="absolute flex justify-between  items-end w-full md:hidden mb-20  ">
                            <span className=" h-10 w-[1px] bg-[#008080]"></span>
                            <span className=" h-4 w-[1px] bg-[#008080]"></span>
                            <span className=" h-10 w-[1px] bg-[#008080]"></span>

                        </div>
                        <CarouselImage onChangeActiveYear={setActiveYear} />
                    </div>
                </Hoverable>




            </div>

            {/* Name & Introduction */}
            <div className="w-full sm:pl-10 sm:pr-6   px-4 flex   flex-col items-center md:items-start mt-2 ">
                <h1 className="text-xl sm:text-4xl font-bold  text-gray-300 ">Hey, I&apos;m Mahdi Hassani,</h1>

                <p className=" font-semibold sm:text-2xl text-gray-500 mt-4 max-w-3xl text-center md:text-start ">
                    A passionate <strong>Full-Stack Web Developer</strong> focused on crafting clean, modern,
                    and user-friendly digital experiences.
                </p>
                <div className="mt-8 w-fit mx-auto md:mx-0  md:flex">


                    <SheetDemo />
                </div>
            </div>
            {/* Profile Image */}
            <div className=" relative md:flex flex-col md:flex-row justify-center items-center px-2 sm:px-4 w-full md:w-10/12 md:h-96 hidden ">

                <div className="w-60 h-60 sm:w-68 sm:h-68 md:w-80 md:h-80  lg:w-96 lg:h-96   rounded-full border-[2px] border-[#008080] ">

                    <Image
                        ref={imageRef}
                        src={`/profile/${activeYear}.jpg`}
                        width={700}
                        height={700}
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
                            <span className=" w-20 h-[1px] bg-[#008080]"></span>
                            <span className=" w-12 h-[1px] bg-[#008080]"></span>
                            <span className=" w-20 h-[1px] bg-[#008080]"></span>

                        </div>
                        <div className="absolute flex justify-between  items-end w-full md:hidden mb-20 ml-1 ">
                            <span className=" h-10 w-[1px] bg-[#008080]"></span>
                            <span className=" h-4 w-[1px] bg-[#008080]"></span>
                            <span className=" h-10 w-[1px] bg-[#008080]"></span>

                        </div>
                        <CarouselImage onChangeActiveYear={setActiveYear} />
                    </div>
                </Hoverable>




            </div>

        </section>

    );
}
export default HeroSection;
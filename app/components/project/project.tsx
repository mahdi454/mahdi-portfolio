


import { IProject, KeyFeatures, PROJECTS, StackType } from "@/app/lib/data";
import Hoverable from "../hoverAble";

import {  MoveRight, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";




function Projects() {

    return (
        <section id="projects" className=" relative mx-auto w-full min-h-screen bg-gray-900 max-w-screen-2xl pt-6 ">
            <div className="relative  px-4  md:px-12 mt-6 ">
                <span className="block mr-4 bg-[#005c5c] w-full h-[1px]"></span>
                <p className=" absolute -top-4 md:-top-4.5 md:text-base text-sm  text-slate-300 tracking-wide border border-[rgba(0,92,92)] rounded-full px-2.5 md:px-3 pt-2 h-9 md:h-10 bg-gray-900 font-semibold ">PROJECTS</p>

                {/* <h1 className={`${geistSans.className} text-xl md:text-4xl  md:indent-52 pb-6 pt-10 md:py-16`} >
                    Since I began my path as a developer, improving my soft skills has been a key part of becoming the best I can be.
                </h1> */}
            </div>
            <div className="relative  px-4  md:px-12 pt-24">
                {PROJECTS.map((item: IProject, index) => (
                    <div key={item.slug} className=" ">
                        <div className="flex flex-col ">
                            <h1 className="text-2xl font-semibold mb-2 md:mb-3 text-[#008080]">0{index + 1} {item.title}</h1>
                            <p className="mb-4 md:mb-6 text-lg md:text-xl  tracking-wide">{item.description}</p>
                        </div>
                        <div className="w-full flex md:gap-12 flex-col md:flex-row gap-10 mb-24">
                            <div className="w-full space-y-6 ">
                                {item.keyFeatures.map((feature: KeyFeatures) => (
                                    <div key={feature.feature} className="flex  gap-3 ">
                                        <span className="text-[#008080] mt-1"><Sparkles size={20} /></span>
                                        <span>
                                            <p className="font-semibold md:font-normal md:text-lg tracking-wider mb-1 "> {feature.feature}</p>
                                            <p className="text-gray-400 text-sm md:text-base"> {feature.featureDesc}</p>
                                        </span>
                                    </div>
                                ))}
                            </div>
                            <div className="w-full md:w-4/6 px-4 md:pr-12 flex flex-col justify-between">
                                <div className="flex flex-col gap-4 relative md:mt-6 ">

                                    <span className="block mr-4 bg-[#005c5c] w-full h-[1px]"></span>
                                    <p className=" absolute -top-4 md:-top-4.5 md:text-base text-sm  text-slate-300 tracking-wide border border-[rgba(0,92,92)] rounded-full px-2.5 md:px-3 pt-2 h-9 md:h-10 bg-gray-900 font-semibold ">MY STACK</p>
                                    <div className="flex flex-wrap gap-4 mt-5">
                                        {item.techStack.map((stack: StackType) => (
                                            <div
                                                className="flex gap-2 items-center leading-none border border-[#005c5c] px-2.5 md:px-3 py-1 rounded-full h-9 md:h-10"
                                                key={stack.name}
                                            >
                                                <Image
                                                    src={stack.icon}
                                                    alt={stack.name}
                                                    width={24}
                                                    height={24}
                                                    className="object-cover hidden md:block"
                                                />
                                                <Image
                                                    src={stack.icon}
                                                    alt={stack.name}
                                                    width={20}
                                                    height={20}
                                                    className="object-cover md:hidden"
                                                />
                                                <span className="capitalize text-sm md:text-base">
                                                    {stack.name}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="md:mb-12 mt-6 flex justify-between items-center pr-2">

                                    <Hoverable
                                        hoverText="[ See Code ]"
                                        cursorColor="white"
                                        borderColor="slate-100"
                                        blurAmount="md"  // sm, md, lg, xl, 2xl, etc.
                                        bgOpacity="10"   // 5, 10, 20, etc. (percentage)
                                    >

                                        <Link href={item.githubUrl} className="relative text-sm sm:text-base   px-8 py-2 text-white bg-white/10 backdrop-blur-md shadow-md  transition hover:bg-[rgb(0,92,92)] flex items-center gap-1 ">
                                            <span className="absolute  h-2 w-2 rounded-full top-3.5 sm:top-4 left-3  bg-green-400 animate-pulse  "></span>
                                        Git hub <span className=""><MoveRight size={18} /></span>
                                        </Link >
                                    </Hoverable>
                                    <p className="text-lg text-gray-400">{item.year}</p>


                                </div>
                            </div>
                        </div>

                    </div>
                ))}

            </div>




        </section>
    );
}
export default Projects


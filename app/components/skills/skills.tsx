


import Hoverable from "../hoverAble";

import { Roboto } from "next/font/google";


const geistSans = Roboto({
    weight: "400",
    style: "italic",
    subsets: ["latin"],
});

function Skills() {

    return (
        <section id="skills" className=" relative mx-auto w-full min-h-screen bg-gray-900 max-w-screen-2xl pt-6 ">
  <div className="relative  px-4  md:px-12 mt-6 ">
                    <span className="block mr-4 bg-[#005c5c] w-full h-[1px]"></span>
                    <p className=" absolute -top-4 md:-top-4.5 md:text-base text-sm  text-slate-300 tracking-wide border border-[rgba(0,92,92)] rounded-full px-2.5 md:px-3 pt-2 h-9 md:h-10 bg-gray-900 font-semibold ">SKILLS</p>

                    <h1 className={`${geistSans.className} text-xl md:text-4xl  md:indent-52 pb-6 pt-10 md:py-20`} >
                    Since I began my path as a developer, improving my soft skills has been a key part of becoming the best I can be.
                    </h1>

                </div>
           

            <Hoverable
                hoverText=""
                cursorColor="white"
                borderColor="slate-100"
                blurAmount="[1px]"  // sm, md, lg, xl, 2xl, etc.
                bgOpacity="10"   // 5, 10, 20, etc. (percentage)
            >
                <div className="flex flex-col md:flex-row justify-center items-center gap-6 px-4  md:px-12">
                    <div className="relative px-4 py-3 w-full h-48 bg-white/10 backdrop-blur-md text-white shadow-md hover:inset-top-emerald transition-shadow delay-700 rounded-sm">

                        <p className="mb-2 font-bold text-xl md:text-2xl tracking-wider text-center text-[#008080]">Non-stop learning</p>
                        <p className="md:font-semibold tracking-wide">Technology never stops updating, that&apos;s why those who work with technology should not stop updating themselves either.</p>
                    </div>
                    <div className="relative px-4 py-3 w-full h-48 bg-white/10 backdrop-blur-md text-white shadow-md hover:inset-top-emerald transition-shadow delay-700 rounded-sm">

                        <p className="mb-2 font-bold text-xl md:text-2xl tracking-wider text-center text-[#008080]">Communicative</p>
                        <p className="md:font-semibold tracking-wide">No matter your profession, communication is always a need in any field.</p>
                    </div>
                    <div className="relative px-4 py-3 w-full h-48 bg-white/10 backdrop-blur-md text-white shadow-md hover:inset-top-emerald transition-shadow delay-700 rounded-sm">

                        <p className="mb-2 font-bold text-xl md:text-2xl tracking-wider text-center text-[#008080]">Open-minded</p>
                        <p className="md:font-semibold tracking-wide">When you work for people, you need to accept new ideas from clients or team members and be able to work on them.</p>
                    </div>
                </div>
            </Hoverable>



        </section>
    );
}
export default Skills


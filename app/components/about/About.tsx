
import { Roboto } from "next/font/google";


import Hoverable from "../hoverAble";
import StackList from "./stackList";
const geistSans = Roboto({
    weight: "400",
    style: "italic",
    subsets: ["latin"],
});


function AboutMe() {

    return (
        <section id="about" >

            <div className="mx-auto w-full min-h-screen bg-gray-900 max-w-screen-2xl text-white pt-6">
                <div className="relative  px-4  md:px-12 mt-6 ">
                    <span className="block mr-4 bg-[#005c5c] w-full h-[1px]"></span>
                    <p className=" absolute -top-4 md:-top-4.5 md:text-base text-sm  text-slate-300 tracking-wide border border-[rgba(0,92,92)] rounded-full px-2.5 md:px-3 pt-2 h-9 md:h-10 bg-gray-900 font-semibold ">ABOUT ME</p>

                    <h1 className={`${geistSans.className} text-xl md:text-4xl  md:indent-52 pb-4 pt-10 md:py-16`} >
                        Wherever I am in the world, I’m always excited to create something meaningful. If you enjoy my work and want to collaborate — let’s make it happen!
                    </h1>

                </div>

                <div className="w-full flex md:gap-12 flex-col md:flex-row gap-10">
                    <div className="w-full sm:pl-12 sm:pr-6   px-4   ">
                        <Hoverable
                            hoverText=""
                            cursorColor="white"
                            borderColor="slate-100"
                            blurAmount="[1px]"  // sm, md, lg, xl, 2xl, etc.
                            bgOpacity="10"   // 5, 10, 20, etc. (percentage)
                        >


                            <p className=" mb-4 md:text-lg">
                                My journey into tech began in school, driven by curiosity and a love for problem-solving. After excelling in the Kankor exam, I studied Software Engineering at Kabul University and later earned a scholarship to complete my BCA at Bangalore University in India.
                            </p>
                            <p className=" mb-4 md:text-lg">
                                Since then, I’ve built projects ranging from personal experiments to full-scale client solutions. For the past year, I’ve worked as a freelance full-stack developer, turning ideas into clean, functional digital experiences — from smooth UIs to robust backend systems.
                            </p>




                            <p className=" mb-4 md:text-lg">
                                Outside of coding, you’ll probably find me running, watching movies, or catching the latest UFC events. Currently based in Bangalore, I’m always open to new connections, exciting collaborations, or grabbing a coffee ☕.
                            </p>
                        </Hoverable>
                    </div>
                    <div className=" w-full md:w-4/6 px-4 md:pr-12 ">
                        <div className="flex flex-col gap-4 relative md:mt-6 ">
                            {/* <p className="text-3xl tracking-wider">Mahdi Hassani</p>
                            <div>
                                <p className="font-semibold">Bachelor of Computer Applications (BCA)</p>
                                <p> Bengaluru City University</p>
                                <p className="text-slate-400 mb-4">12.06.2023</p>
                            </div> */}
                            <span className="block mr-4 bg-[#005c5c] w-full h-[1px]"></span>
                            <p className=" absolute -top-4 md:-top-4.5 md:text-base text-sm  text-slate-300 tracking-wide border border-[rgba(0,92,92)] rounded-full px-2.5 md:px-3 pt-2 h-9 md:h-10 bg-gray-900 font-semibold ">MY STACK</p>
                            <StackList />
                            {/* <p className="font-bold  ">25 Years Old</p>
                            <p className="flex items-center gap-2"><MapPin/> <span>India, Bangalore</span></p> */}

                        </div>


                    </div>

                </div>




            </div>




        </section>
    );
}
export default AboutMe


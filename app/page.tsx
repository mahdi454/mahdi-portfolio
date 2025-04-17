import NavBar from "./components/navbar/navBar";
import PageTransition from "./components/pageTransition";
import { IBM_Plex_Mono } from "next/font/google";
import { cn } from "./lib/utils";


import HeroSection from "./components/home/heroSection";
import AboutMe from "./components/about/About";
import Skills from "./components/skills/skills";
import Projects from "./components/project/project";
import Footer from "./components/footer/footer";

const IBM_Font = IBM_Plex_Mono({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});

function MyApp() {
  return (
    <PageTransition showButton={true}>
      <div className={cn(`${IBM_Font.className}  text-gray-50 bg-gray-900   w-full`)} >
        <NavBar />
        <HeroSection/>
        <AboutMe/>
        <Skills/>
        <Projects/>
        <Footer/>
       
      </div>

    </PageTransition>
  );
}
export default MyApp;

{/* <>
<div className="fixed bottom-12 left-0 right-0 mx-auto w-full  justify-center mb-16 hidden md:flex">

  <div className="absolute w-32 h-32 rounded-full border-t border-r border-l border-emerald-500 delay-100 animate-ping">
  </div>

  <div className="absolute w-32 h-32 rounded-full border-t border-r border-l border-emerald-500 group flex justify-center items-center ">
    <Link href="/about" className="  flex flex-col items-center gap-1 px-4 py-8">
      <span>see more</span>
      <span className=" group-hover:translate-y-3 transition-transform delay-100 ease-in"><ChevronsDown /></span>
    </Link>
  </div>

</div>
<Link href="/about">
  <div className="fixed bottom-12 left-0 right-0 mx-auto w-full flex justify-center mb-12 md:hidden">
    <div className="absolute w-28 h-28 rounded-full border-t border-r border-l border-emerald-500 delay-100 animate-ping">
    </div>

    <div className="absolute w-28 h-28 rounded-full border-t border-r border-l border-emerald-500 ">
    </div>

    <button className="absolute mt-10 flex flex-col items-center gap-1 text-sm">see more <span><ChevronsDown size={18} /></span></button>
  </div>
</Link>
</> */}

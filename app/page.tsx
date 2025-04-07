import NavBar from "./components/navBar";
import PageTransition from "./components/pageTransition";
import { IBM_Plex_Mono } from "next/font/google";
import { cn } from "./lib/utils";
import About from "./components/about/about";
import Skills from "./components/about/skills";
import { ChevronsDown } from "lucide-react";
import Link from "next/link";
import Hoverable from "./components/hoverAble";

const IBM_Font = IBM_Plex_Mono({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});

function MyApp() {
  return (
    <PageTransition showButton={true}>
      <div className={cn(`${IBM_Font.className}  text-gray-50 bg-gray-900   w-full fixed `)} >
        <NavBar />
        <About />
        <>
          {/* <Hoverable

            hoverText=" "
            cursorColor="white"
            borderColor="slate-100"
            blurAmount="[1px]"  // sm, md, lg, xl, 2xl, etc.
            bgOpacity="10"   // 5, 10, 20, etc. (percentage)
          > */}

            <Link href="/about" className="-z-10">
              <div className="fixed bottom-12 left-0 right-0 mx-auto w-full  justify-center mb-16 hidden md:flex">

                <div className="absolute w-32 h-32 rounded-full border-t border-r border-l border-emerald-500 delay-100 animate-ping">
                </div>

                <div className="absolute w-32 h-32 rounded-full border-t border-r border-l border-emerald-500 group ">
                </div>

                <button className="absolute mt-10 flex flex-col items-center gap-2">see more <span className=" group-hover: translate-y-4"><ChevronsDown /></span></button>
              </div>
            </Link>
          {/* </Hoverable> */}

          <Link href="/about">
            <div className="fixed bottom-12 left-0 right-0 mx-auto w-full flex justify-center mb-12 md:hidden">
              <div className="absolute w-28 h-28 rounded-full border-t border-r border-l border-emerald-500 delay-100 animate-ping">
              </div>

              <div className="absolute w-28 h-28 rounded-full border-t border-r border-l border-emerald-500 ">
              </div>

              <button className="absolute mt-10 flex flex-col items-center gap-1 text-sm">see more <span><ChevronsDown size={18} /></span></button>
            </div>
          </Link>
        </>

      </div>

    </PageTransition>
  );
}
export default MyApp;

import { Copyright, Github, Linkedin, Mail, Twitter } from "lucide-react";
import Link from "next/link";
import { SOCIAL_LINKS } from "../../lib/data";




function Footer() {

    return (
        <section id="footer" className=" relative mx-auto w-full bg-gray-900 max-w-screen-2xl pt-6  ">
            <div className="relative  px-4  md:px-16">
                <span className="block mr-4 bg-[#005c5c] w-full h-[1px]"></span>
                <p className=" absolute -top-4 md:-top-4.5 md:text-base text-sm  text-slate-300 tracking-wide border border-[rgba(0,92,92)] rounded-full px-2.5 md:px-3 pt-2 h-9 md:h-10 bg-gray-900 font-semibold ">CONTACT</p>
            </div>
            {/* <SheetDemo/> */}
            <div className="flex flex-col md:flex-row justify-between items-start py-6 ">


                <div className="relative  px-4  md:px-16 mt-6  flex flex-col gap-2">
                    <p className="text-xl font-bold">Mahdi Hassani</p>
                    <p className=" max-w-md text-sm">I help create experiences that look great and feel even better to use.</p>
                    <span className=" flex items-center gap-6 text-[#008080]">
                        <Link href={SOCIAL_LINKS[0].url}>
                            <Github size={20} className="hover:text-[hsl(180,100%,35%)]" />
                        </Link>
                        <Link href={SOCIAL_LINKS[2].url}>
                            <Twitter size={20} className="hover:text-[hsl(180,100%,35%)]" />
                        </Link>
                        <Link href={SOCIAL_LINKS[1].url}>
                            <Linkedin size={20} className="hover:text-[hsl(180,100%,35%)]" />
                        </Link>
                    </span>
                </div>
                <div className="flex flex-row md:flex-col items-center gap-3 md:gap-1 relative  px-4  md:px-16 mt-4 md:mt-6 ">
                    <p className="font-bold md:mb-1">Genral</p>
                    <a
                        href="#projects"
                        className="text-sm text-[#008080] hover:text-[hsl(180,100%,35%)]"
                    >
                        Projects
                    </a>
                    <a
                        href="#skills"
                        className="text-sm text-[#008080] hover:text-[hsl(180,100%,35%)]"
                    >
                        Skills
                    </a>
                    <a
                        href="#about"
                        className="text-sm text-[#008080] hover:text-[hsl(180,100%,35%)]"
                    >
                        About
                    </a>

                    <a
                        href="#"
                        className="text-sm text-[#008080] hover:text-[hsl(180,100%,35%)]"
                    >
                        Home
                    </a>
                </div>
                <div className="relative  px-4  md:px-16 mt-4 md:mt-6">
                    <p className="max-w-md text-sm mb-2">Feel free to reach out to me for any inquiries or collaboration opportunities.</p>
                    <div className="flex justify-center md:justify-start items-center pb-4">
                        <Link href="mailto:mahdint14@gmail.com?subject=Let's%20catch%20up%20for%20a%20cool%20opportunity!" className="bg-white/10 backdrop-blur-md shadow-md px-6 flex items-center gap-2 py-1 hover:bg-[#005c5c] ">
                            <span><Mail size={18} /></span>
                            <button> mahdint14@gmail.com</button>
                        </Link>
                    </div>
                </div>


            </div>
            <div className="flex justify-center items-center">
                <p className="text-center text-sm  border-t border-[#005c5c] pt-3 flex items-center flex-wrap justify-center gap-1 px-4 md:px-12">
                    <span>Copyright</span>
                    <Copyright size={18} />
                    <span>2025 Mahdi Hassani. </span>
                    <span>All rights reserved.</span></p>
            </div>
        </section>
    );
}
export default Footer


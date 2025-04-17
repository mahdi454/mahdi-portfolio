

"use client"

import { SOCIAL_LINKS } from "@/app/lib/data"
import emailjs from "@emailjs/browser";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "../ui/sheet"
import { Github, Linkedin, Mail, MoveRight, Twitter } from "lucide-react"
import Link from "next/link"
import { useState } from "react";
import { toast } from 'sonner';

export function SheetDemo() {

    const [formData, setFormData] = useState({ name: "", email: "", message: "" });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
      
        emailjs.send(
          "service_dz65irn",
          "template_5hl8ajk",
          formData,
          "OCZ_ldX0_dI3d7lAG"
        ).then(() => {
          toast.success("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        }).catch((error) => {
          console.error("Email error:", error);
          toast.error("Failed to send message.");
        });
      };
      
    return (
        <Sheet >
            <SheetTrigger asChild>




                <div className="w-full">


                    <button className=" hidden  relative text-sm sm:text-base   px-6 py-2 text-white bg-white/10 backdrop-blur-md shadow-md  transition hover:bg-[rgb(0,92,92)] md:flex items-center gap-1 ">
                        <span className="absolute  h-2 w-2 rounded-full top-3.5 sm:top-4 left-3  bg-green-400 animate-pulse  "></span>
                        Available from March <span className=""><MoveRight size={18} /></span>
                    </button>
                    <button className=" mt-6  px-6 py-2 text-white bg-white/10 backdrop-blur-md shadow-md w-full hover:bg-[#005c5c] transition md:hidden flex gap-2 items-center justify-center">
                        Let&apos;s Talk<span className=""><MoveRight size={18} /></span>
                    </button>
                </div>


            </SheetTrigger>
            <SheetContent side="bottom" className=" w-full md:w-6/12 mx-auto h-[70vh] md:h-[50vh] rounded-t-md bg-white/10 backdrop-blur-xl text-slate-300 ">
                <SheetHeader className="">
                    <SheetTitle className="flex justify-center items-center mt-1 mb-3">

                        <div className='block h-2 w-48 bg-[#008080] rounded-full'></div>
                    </SheetTitle>
                    <SheetDescription className="flex justify-center items-center ">
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
                    </SheetDescription>
                </SheetHeader>
                <div className="">

                    <div className="flex justify-center items-center pb-4">
                        <Link href="mailto:mahdint14@gmail.com?subject=Let's%20catch%20up%20for%20a%20cool%20opportunity!" className="bg-white/10 backdrop-blur-md shadow-md px-6 flex items-center gap-2 py-1 hover:bg-[#005c5c] ">
                            <span><Mail size={18} /></span>
                            <button> mahdint14@gmail.com</button>
                        </Link>
                    </div>
                    <div className="flex justify-center items-center pb-4">
                        <p className="text-[#008080]">Or sned a message</p>
                    </div>



                    <form onSubmit={sendEmail} className="space-y-3 px-6 md:px-12">
                        <div className="flex flex-col md:flex-row gap-3 md:gap-6">
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full p-2 border rounded border-gray-500 outline-none bg-white/5"
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full p-2 border rounded border-gray-500 outline-none bg-white/5"
                                required
                            />
                        </div>
                        <textarea
                            name="message"
                            placeholder="Your Message"
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full p-2 border rounded border-gray-500 outline-none bg-white/5 h-24"
                            required
                        />
                        {/* <button
                            type="submit"
                            className="bg-emerald-600 text-white px-4 py-2 rounded hover:bg-emerald-700"
                        >
                            Send
                        </button> */}


                        <button type="submit" className="w-full rounded text-center text-sm sm:text-base   px-6 py-2 text-white hover:bg-white/10 backdrop-blur-md shadow-md  transition bg-[#005c5c] flex items-center gap-1 justify-center ">

                            Send Message <span className=""><MoveRight size={18} /></span>
                        </button>

                    </form>

                </div>

            </SheetContent>
        </Sheet>
    )
}



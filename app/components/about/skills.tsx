"use client"
import { useRef, useEffect, useState } from "react";
import { IBM_Plex_Mono } from "next/font/google";
import { CarouselSize } from "../picture/years";
import Hoverable from "../hoverAble";
import gsap from "gsap";


const geistSans = IBM_Plex_Mono({
    weight: "400",
    style: "normal",
    subsets: ["latin"],
});

function Skills() {


    return (
        <section className="mx-auto w-full min-h-screen bg-gray-900 max-w-screen-2xl flex flex-col justify-center  items-center  text-white mt-10">
            {/* <p className="text-3xl font-bold text-gray-400 max-w-2xl">
                Whether in Berlin or elsewhere, I am crafting
                digital experiences and innovative Webflow solutions for
                brands, companies and your next big idea.
            </p> */}
            {/* <section className="max-w-4xl mx-auto px-6 py-16 text-gray-100"> */}
  <h2 className="text-3xl font-bold text-emerald-500">About Me</h2>
  
  <p className="text-lg mb-4">
    Hello! I’m <strong>Mahdi</strong>, a Full Stack Developer with a Bachelor's in Computer Applications from Bangalore City University, India.
  </p>

  <p className="text-lg mb-4">
    My journey into tech began back in school when I started exploring programming out of curiosity. Fast forward to today, I’ve built a variety of projects — some for fun, some for clients — and have been working professionally as a <strong>freelance full stack developer</strong> for over a year.
  </p>

  <p className="text-lg mb-4">
    I’m passionate about building <strong>clean, modern, and user-friendly digital experiences</strong>. Whether it’s designing smooth UI interactions or structuring robust APIs, I love bringing ideas to life.
  </p>

  <p className="text-lg mb-4">
    Outside of coding, I enjoy running, watching movies and UFC events. I’m currently based in <strong>Bangalore, India</strong> — if you’re nearby, we could grab a coffee or even collaborate on a cool idea ☕.
  </p>

  <h3 className="text-2xl font-semibold text-emerald-400 mt-10 mb-4">Tech I work with:</h3>
  <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-gray-300 list-disc list-inside">
    <li>JavaScript (ES6+)</li>
    <li>TypeScript</li>
    <li>React</li>
    <li>Next.js</li>
    <li>Node.js</li>
    <li>Express.js</li>
    <li>MongoDB + Mongoose</li>
    <li>PostgreSQL</li>
    <li>Tailwind CSS</li>
    <li>GSAP</li>
  </ul>

  <h3 className="text-2xl font-semibold text-emerald-400 mt-10 mb-4">Featured Projects:</h3>
  <ul className="text-lg text-gray-300 list-disc list-inside">
    <li>Project One</li>
    <li>Project Two</li>
    <li>Project Three</li>
    <li>Project Four</li>
    <p className="mt-2 text-sm text-gray-400">→ More details are available on the <a href="/projects" className="text-emerald-400 underline hover:text-emerald-300">Projects</a> page.</p>
  </ul>

  <p className="text-lg mt-10">
    Whether in Bangalore or anywhere else, I'm always excited to create something meaningful. If you enjoy my work and want to collaborate — let's make it happen!
  </p>
</section>

        // </section>
    )
}
export default Skills
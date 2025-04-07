"use client";

import React, { useEffect, useRef, useState, useCallback, memo } from "react";
import gsap from "gsap";
import Hoverable from "./hoverAble";
import AnimatedLetters from "./animatedTxt";
import { useIsTouchDevice } from "../hook/useIsTouch";
import LogoAnimateA from "./logoAnimate";

interface PageTransitionProps {
  children: React.ReactNode;
  showButton?: boolean;
  sections?: number;
  color?: string;
}

// Memoize the content to prevent unnecessary re-renders
const TransitionContent = memo(
  ({ children, visible }: { children: React.ReactNode; visible: boolean }) => (
    <div
      className={`transition-opacity duration-700 ease-in-out overflow-hidden ${visible ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
    >
      {children}
    </div>
  )
);

TransitionContent.displayName = "TransitionContent";

const PageTransition: React.FC<PageTransitionProps> = ({
  children,
  showButton = false,
  sections = 4,
  color = "#005C5C",
}) => {
  const [isTransitionComplete, setTransitionComplete] = useState(false);
  const [isLoaderVisible, setLoaderVisible] = useState(true);
  const transitionContainerRef = useRef<HTMLDivElement>(null);
  const loaderRef = useRef<HTMLDivElement>(null);
  const timeline = useRef<gsap.core.Timeline | null>(null);
  const isTouchAble = useIsTouchDevice();

  // Create div refs more efficiently
  const divElements = useRef<HTMLDivElement[]>([]);

  // Set up div refs
  const setDivRef = useCallback((el: HTMLDivElement | null, index: number) => {
    if (el) divElements.current[index] = el;
  }, []);

  // Slide up (exit) animation
  const slideUp = useCallback(() => {
    if (!timeline.current) return;

    // Hide the loader first
    gsap.to(loaderRef.current, {
      opacity: 0,
      duration: 0.3,
      ease: "power2.inOut",
      onStart: () => {
        if (loaderRef.current) {
          loaderRef.current.style.pointerEvents = "none";
        }
      },
      onComplete: () => {
        setLoaderVisible(false);
      },
    });

    // Slide up the transition panels
    gsap.to(divElements.current, {
      bottom: "100%",
      stagger: 0.2,
      duration: 0.5,
      ease: "power2.out",
      onComplete: () => {
        setTransitionComplete(true);

        // Optional: Remove transition elements from DOM after animation completes
        if (transitionContainerRef.current) {
          gsap.set(transitionContainerRef.current, { display: "none" });
        }
      },
    });
  }, []);

  // Initial entry animation
  useEffect(() => {
    // Make sure all divs are available
    if (
      !transitionContainerRef.current ||
      divElements.current.length !== sections
    )
      return;

    // Create new timeline for this transition
    const tl = gsap.timeline();
    timeline.current = tl;

    // Set initial state
    gsap.set(divElements.current, { bottom: "100%" });

    // Slide down animation
    tl.to(divElements.current, {
      bottom: "0%",
      stagger: 0.2,
      duration: 0.3,
      ease: "power2.inOut",
    });

    // Show loader
    tl.to(
      loaderRef.current,
      {
        opacity: 1,
        duration: 0.5,
        ease: "power2.inOut",
        onStart: () => {
          if (loaderRef.current) {
            loaderRef.current.style.pointerEvents = "auto";
          }
        },
      },
      "-=0.2"
    );

    // Auto transition if button is not shown
    if (!showButton) {
      const timer = setTimeout(() => {
        slideUp();
      }, 3000);

      return () => clearTimeout(timer);
    }

    // Cleanup
    return () => {
      tl.kill();
      timeline.current = null;
    };
  }, [sections, showButton, slideUp]);

  // Create section divs for the transition
  const renderSections = () => {
    const step = 100 / sections;

    return Array.from({ length: sections }).map((_, i) => {
      // Round width/left to 4 decimals to avoid floating-point quirks
      const width = parseFloat((step).toFixed(4));
      const left = parseFloat((step * i).toFixed(4));

      return (
        <div
          key={i}
          className="fixed h-screen bottom-full overflow-hidden"
          style={{
            background: color,
            width: `calc(${width}% + 0.5px)`,  // tiny bump to fix subpixel gap
            left: `${left}%`,
            willChange: "transform",
          }}
          ref={(el) => setDivRef(el as HTMLDivElement, i)}
        />
      );
    });
  };


  return (
    <>
      {/* Transition container - will be hidden after animation */}
      <div
        ref={transitionContainerRef}
        className={`fixed inset-0 h-screen w-screen overflow-hidden z-30 ${isTransitionComplete ? "hidden" : ""
          }`}
      >
        {renderSections()}
      </div>
      <Hoverable hoverText="[ Click here ]"
        cursorColor="white"
        borderColor="slate-300"
        blurAmount="md"  // sm, md, lg, xl, 2xl, etc.
        bgOpacity="10"   // 5, 10, 20, etc. (percentage)
      >

        <div
          className={`fixed inset-0 h-screen w-screen overflow-hidden z-40 ${showButton && isTransitionComplete ? "hidden" : ""
            }`}
        >

        </div>
      </Hoverable>

      {/* Loader/Splash screen */}
      {isLoaderVisible && (
        <div
          ref={loaderRef}
          className={`fixed inset-0 h-screen w-screen overflow-hidden z-50 flex items-center justify-center`}
          style={{ opacity: 0 }}
        >
          {/* {showButton ? ( */}
          <>
            <div className="fixed top-0 left-0">
              <div className="container mx-auto flex justify-center p-4">
                <LogoAnimateA />
              </div>
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="flex flex-col gap-4">
                {/* <p className="text-slate-300 text-2xl font-light p-1 tracking-widest text-center">
                    Hi, I'm
                  </p> */}

                <div
                  onClick={slideUp}>
                  <Hoverable hoverText="[ Click here ]"
                    cursorColor="white"
                    borderColor="slate-300"
                    blurAmount="md"  // sm, md, lg, xl, 2xl, etc.
                    bgOpacity="10"   // 5, 10, 20, etc. (percentage)
                  >
                    <AnimatedLetters />
                  </Hoverable>
                  {isTouchAble && showButton && (

                    <div className="flex items-center justify-center">
                      <button className="relative   px-8 py-2 text-white bg-white/20 backdrop-blur-md shadow-md  transition hover:bg-[rgb(0,92,92)]  ">
                        <span className="absolute  h-2 w-2 rounded-full top-4.5 left-3  bg-green-400 animate-pulse  "></span>
                        see more <span className="font-black">&rarr;</span>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="fixed bottom-0 w-full">


              <p className="text-[#F2F0EF] px-2 sm:px-8 max-w-lg sm:text-2xl tracking-wider text-xl font-light mb-1">
                {/* Passionate web developer focused on crafting clean, modern,
                    and user-friendly digital experiences. */}
                Remember, the average human life is about 26,645 days.
              </p>
              <div className="flex justify-between items-center px-2 sm:px-8 py-2 sm:py-4 text-[#F2F0EF]">
                <p className="underline text-lg">Index V.01</p>
                <div className="flex items-center gap-1 font-semibold text-lg">
                  <p className="text-2xl font-mono">&copy;</p>
                  <p className="mb-2"> 2025</p>
                </div>
              </div>
            </div>
          </>
          {/* ) : (
            <div className="flex space-x-3">
              <span className="w-4 h-4 bg-[#F2F0EF] rounded-full animate-bounce1" />
              <span className="w-4 h-4 bg-[#F2F0EF] rounded-full animate-bounce2" />
              <span className="w-4 h-4 bg-[#F2F0EF] rounded-full animate-bounce3" />
            </div>
          )} */}
        </div >
      )}

      {/* Main content */}
      <TransitionContent visible={isTransitionComplete}>
        {children}
      </TransitionContent>
    </>
  );
};

export default PageTransition;

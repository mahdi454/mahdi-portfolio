"use client";
import React, { useEffect, useRef, useCallback } from "react";
import { gsap } from "gsap";
import { useCursor } from "../context/cursorCtx";
import { cn } from "../lib/utils";

const MagicCursor = () => {
  const mouseRef = useRef({ x: 0, y: 0 });
  const requestRef = useRef<number | null>(null);
  const { 
    ballRef, 
    textRef, 
    active, 
    pos, 
    setPos, 
    hoverText, 
    borderColor, 
    cursorColor,
    blurAmount,
    bgOpacity 
  } = useCursor();
  const ratio = 0.05;

  const handleMouseMove = useCallback((e: MouseEvent) => {
    mouseRef.current = { x: e.clientX, y: e.clientY };
  }, []);

  const animateCursor = useCallback(() => {
    if (!active && ballRef.current) {
      const newX = pos.x + (mouseRef.current.x - pos.x) * ratio;
      const newY = pos.y + (mouseRef.current.y - pos.y) * ratio;
      if (Math.abs(newX - pos.x) > 0.1 || Math.abs(newY - pos.y) > 0.1) {
        setPos({ x: newX, y: newY });
      }
      gsap.set(ballRef.current, { x: newX, y: newY });
    }
    requestRef.current = requestAnimationFrame(animateCursor);
  }, [active, pos, setPos, ballRef]);

  useEffect(() => {
    const ball = ballRef.current;
    if (!ball) return;
    gsap.set(ball, { xPercent: -50, yPercent: -50 });
    document.addEventListener("mousemove", handleMouseMove, { passive: true });
    requestRef.current = requestAnimationFrame(animateCursor);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [handleMouseMove, animateCursor]);

  // Build dynamic classes based on context values
  const borderColorClass = `border-${borderColor}`;
  const bgColorClass = `bg-${cursorColor}/${bgOpacity}`;
  const blurClass = `backdrop-blur-${blurAmount}`;

  return (
    <div className="absolute w-12 h-12 pointer-events-none z-[1000000] ">
      <div
        ref={ballRef}
        className={cn(
          "fixed block left-0 top-0  transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 border-[2px]  rounded-full ",
          borderColorClass,
          active ? bgColorClass : "",
          active ? blurClass : ""
        )}
      >
        <div
          ref={textRef}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-slate-50 font-semibold opacity-0 pointer-events-none whitespace-nowrap"
          style={{ fontSize: "3.2px" }}
        >
          {hoverText}
        </div>
      </div>
    </div>
  );
};

export default MagicCursor;
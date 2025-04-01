"use client";
import React, { useEffect, useRef, useCallback } from "react";
import { gsap } from "gsap";
import { useCursor } from "../context/cursorCtx";
import { cn } from "../lib/utils";

const MagicCursor = () => {
  const mouseRef = useRef({ x: 0, y: 0 });
  const requestRef = useRef<number | null>(null);
  const { ballRef, textRef, active, pos, setPos, hoverText,hoverOpacity } = useCursor();
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

  return (
    <div className="absolute w-12 h-12 pointer-events-none z-[1000000]">
      <div
        ref={ballRef}
        className={cn( "fixed block left-0 top-0 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 border border-slate-300 rounded-full pointer-events-none will-change-transform opacity-80")}
       
      >
        <div
          ref={textRef}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black font-semibold opacity-0 pointer-events-none whitespace-nowrap"
          style={{ fontSize: "3px" }}
        >
          {hoverText}
        </div>
      </div>
    </div>
  );
};

export default MagicCursor;
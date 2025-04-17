"use client";
import { useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { useCursor } from '../context/cursorCtx';
import gsap from 'gsap';

/**
 * Custom hook for handling navigation with proper cursor reset
 */
export const useCursorNavigation = () => {
  const router = useRouter();
  const { ballRef, textRef, setActive } = useCursor();

  // Reset cursor function
  const resetCursor = useCallback(() => {
    // Reset cursor state
    setActive(false);
    
    // Animate cursor back to normal size
    if (ballRef.current) {
      gsap.to(ballRef.current, {
        scale: 1,
        borderWidth: "1px",
        duration: 0.2,
        backgroundColor: "transparent",
        ease: "power2.out"
      });
    }
    
    // Hide hover text
    if (textRef.current) {
      gsap.to(textRef.current, { 
        opacity: 0, 
        duration: 0.2 
      });
    }
  }, [ballRef, textRef, setActive]);

  // Navigate function
  const navigateTo = useCallback((url: string) => {
    resetCursor();
    
    // Add small delay to ensure cursor resets before navigation
    setTimeout(() => {
      router.push(url);
    }, 50);
  }, [resetCursor, router]);

  return { navigateTo, resetCursor };
};
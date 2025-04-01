import { useEffect, useState } from "react";
import { cn } from "../lib/utils";
import { Katibeh } from "next/font/google";

const sairaExtra = Katibeh({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});

const letters = ["M", "A", "H", "D", "I"];
const animations = [
  "animate-active1",
  "animate-active2",
  "animate-active3",
  "animate-active4",
  "animate-active5",
];

const AnimatedLetters = () => {
  const [activeLetter, setActiveLetter] = useState(
    Array(letters.length).fill(false)
  );

  // Trigger animation for all letters on load
  useEffect(() => {
    const timeouts = letters.map((_, idx) =>
      setTimeout(() => {
        setActiveLetter((prev) => {
          const newActive = [...prev];
          newActive[idx] = true;
          return newActive;
        });
      }, 750 * (idx + 1))
    );

    return () => timeouts.forEach(clearTimeout);
  }, []);

  // Handle hover animation for individual letters
  const handleHover = (index: number) => {
    setActiveLetter((prev) => {
      const newActive = [...prev];
      newActive[index] = true;
      return newActive;
    });

    setTimeout(() => {
      setActiveLetter((prev) => {
        const newActive = [...prev];
        newActive[index] = false;
        return newActive;
      });
    }, 1500);
  };

  return (
    <div className={cn(`${sairaExtra.className} flex gap-4 sm:gap-6`)}>
       {letters.map((letter, idx) => (
      <span
        key={idx}
        className={cn("text-8xl sm:text-9xl font-extralight leading-none mt-4 text-slate-300", activeLetter[idx] && animations[idx])}
        onMouseEnter={() => handleHover(idx)}
        style={{ lineHeight: "0.8",}}
      >
        {letter}
      </span>
    ))}
    </div>
  );
};

export default AnimatedLetters;

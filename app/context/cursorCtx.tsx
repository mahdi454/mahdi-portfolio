"use client";
import React, { createContext, useContext, useRef, useState } from "react";

type CursorContextType = {
  ballRef: React.RefObject<HTMLDivElement>;
  textRef: React.RefObject<HTMLDivElement>;
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  pos: { x: number; y: number };
  setPos: React.Dispatch<React.SetStateAction<{ x: number; y: number }>>;
  hoverText: string;
  setHoverText: React.Dispatch<React.SetStateAction<string>>;

  cursorColor: string;
  setCursorColor: React.Dispatch<React.SetStateAction<string>>;
  borderColor: string;
  setBorderColor: React.Dispatch<React.SetStateAction<string>>;
  blurAmount: string;
  setBlurAmount: React.Dispatch<React.SetStateAction<string>>;
  bgOpacity: string;
  setBgOpacity: React.Dispatch<React.SetStateAction<string>>;
};

const CursorContext = createContext<CursorContextType | null>(null);

export const CursorProvider = ({ children }: { children: React.ReactNode }) => {
  const ballRef = useRef<HTMLDivElement>(null!);
  const textRef = useRef<HTMLDivElement>(null!);
  const [active, setActive] = useState<boolean>(false);
  const [pos, setPos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [hoverText, setHoverText] = useState<string>("Enter");
  const [cursorColor, setCursorColor] = useState<string>("white");
  const [borderColor, setBorderColor] = useState<string>("slate-300");
  const [blurAmount, setBlurAmount] = useState<string>("md");
  const [bgOpacity, setBgOpacity] = useState<string>("10");

  return (
    <CursorContext.Provider value={{
      ballRef,
      textRef,
      active,
      setActive,
      pos,
      setPos,
      hoverText,
      setHoverText,
  
      cursorColor,
      setCursorColor,
      borderColor,
      setBorderColor,
      blurAmount,
      setBlurAmount,
      bgOpacity,
      setBgOpacity
    }}>
      {children}
    </CursorContext.Provider>
  );
};

export const useCursor = () => {
  const context = useContext(CursorContext);
  if (!context) throw new Error("useCursor must be used within CursorProvider");
  return context;
};
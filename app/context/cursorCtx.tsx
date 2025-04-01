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
  hoverOpacity: string;
  setHoverOpacity: React.Dispatch<React.SetStateAction<string>>;
};

const CursorContext = createContext<CursorContextType | null>(null);

export const CursorProvider = ({ children }: { children: React.ReactNode }) => {
  const ballRef = useRef<HTMLDivElement>(null!);
  const textRef = useRef<HTMLDivElement>(null!);
  const [active, setActive] = useState<boolean>(false);
  const [pos, setPos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [hoverText, setHoverText] = useState<string>("Enter");
  const [hoverOpacity, setHoverOpacity] = useState<string>("80");

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
      hoverOpacity,
      setHoverOpacity
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
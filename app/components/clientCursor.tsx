"use client"; 

import { useEffect, useState } from "react";
import MagicCursor from "./magicCursor";

export default function ClientCursor() {
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    const checkTouch = () => {
      setIsTouchDevice(
        "ontouchstart" in window || navigator.maxTouchPoints > 0
      );
    };

    checkTouch();
    window.addEventListener("resize", checkTouch);
    return () => window.removeEventListener("resize", checkTouch);
  }, []);

  if (isTouchDevice) return null; // Don't render cursor on touch devices

  return <MagicCursor />;
}

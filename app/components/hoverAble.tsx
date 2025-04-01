"use client";
import React, { useCallback, useRef } from "react";
import { gsap } from "gsap";
import { useCursor } from "../context/cursorCtx";
import { useIsTouchDevice } from "../hook/useIsTouch";

type MouseEventType = React.MouseEvent<HTMLDivElement, MouseEvent>;

const Hoverable = ({
  children,
  hoverText = "[ Enter ]",
}: {
  children: React.ReactNode;
  hoverText?: string;
}) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { setActive, ballRef, textRef, setPos, setHoverText } = useCursor();
  const isTouchAble = useIsTouchDevice();
  const handleMouseEnter = useCallback(() => {
    setActive(true);
    setHoverText(hoverText);

    gsap.to(ballRef.current, {
      scale: 4.8,
      borderWidth: "0.5px",
      duration: 0.3,
      backgroundColor: "#cbd5e1",
    });

    if (textRef.current) {
      gsap.to(textRef.current, { opacity: 1, duration: 0.3 });
    }
  }, [setActive, ballRef, textRef, hoverText, setHoverText]);

  const handleMouseLeave = useCallback(() => {
    setActive(false);

    gsap.to(ballRef.current, {
      scale: 1,
      borderWidth: "1px",
      duration: 0.3,
      backgroundColor: "transparent",
    });

    if (textRef.current) {
      gsap.to(textRef.current, { opacity: 0, duration: 0.3 });
    }
  }, [setActive, ballRef, textRef]);

  const handleMouseMove = useCallback(
    (e: MouseEventType) => {
      // Only keep the parallax cursor effect, remove the unused callParallax
      const rect = e.currentTarget.getBoundingClientRect();
      const relX = e.clientX - rect.left;
      const relY = e.clientY - rect.top;

      const newX = rect.left + rect.width / 2 + (relX - rect.width / 2) / 1;
      const newY = rect.top + rect.height / 2 + (relY - rect.height / 2) / 1;

      setPos({ x: newX, y: newY });
      gsap.to(ballRef.current!, { x: newX, y: newY, duration: 0.3 });
    },
    [setPos, ballRef]
  );

  if (isTouchAble) return children;

  return (
    <div
      ref={targetRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      {children}
    </div>
  );
};

export default Hoverable;

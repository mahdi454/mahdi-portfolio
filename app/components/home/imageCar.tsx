

"use client"

import * as React from "react"
import { useEffect, useRef, useState, useCallback } from "react"
import gsap from "gsap"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    type CarouselApi,
} from "../ui/carousel"
import { useMediaQuery } from "@/app/hook/useMedia"

const years = ["2020", "2022", "2024", "2025"]


type CarouselImageProps = {
    onChangeActiveYear?: (year: string) => void
}

export function CarouselImage({ onChangeActiveYear }: CarouselImageProps) {
    const [api, setApi] = useState<CarouselApi | null>(null)
    const [activeIndex, setActiveIndex] = useState(0) // ✅ Keep normal index tracking
    const containerRef = useRef<HTMLDivElement>(null)
    const isAnimating = useRef(false) // Prevents multiple scrolls at once
    const isMdScreen = useMediaQuery("(min-width: 768px)") // md breakpoint
  const [orientation, setOrientation] = useState<"horizontal" | "vertical">("vertical")

    // Store the API when the carousel initializes
    const handleApiChange = useCallback((api: CarouselApi | null) => {
        if (api) {
            setApi(api)
            setActiveIndex(api.selectedScrollSnap()) // ✅ Set initial active index
            api.on("select", () => {
                const newIndex = api.selectedScrollSnap();
                setActiveIndex(newIndex);
                onChangeActiveYear?.(years[newIndex]);
            });


        }
    }, [setApi, setActiveIndex,onChangeActiveYear])

    useEffect(() => {
        if (!api || !containerRef.current) return

        const handleWheel = (e: WheelEvent) => {
            if (isAnimating.current) return // Prevent multiple scrolls

            e.preventDefault()

            isAnimating.current = true // Lock animation
            if (e.deltaY > 0) {
                api.scrollNext()
            } else {
                api.scrollPrev()
            }

            gsap.to(containerRef.current, {
                duration: 1,
                ease: "power2.out",
                onComplete: () => {
                    isAnimating.current = false // Unlock after animation
                },
            })
        }

        const element = containerRef.current
        element.addEventListener("wheel", handleWheel, { passive: false })

        return () => {
            element.removeEventListener("wheel", handleWheel)
        }
    }, [api])

    useEffect(() => {
      setOrientation(isMdScreen ? "vertical" : "horizontal")
    }, [isMdScreen])

    // Calculate which item should be considered "active" (middle position)
    const isActive = (index: number) =>
        index === activeIndex + 1 || (index === 0 && activeIndex + 1 === years.length);

    return (
      <div ref={containerRef} className="w-full max-w-md overflow-hidden md:pl-16 md:pr-4  z-5">
      <Carousel
        opts={{ align: "start", loop: true }}
        orientation={orientation}
        setApi={handleApiChange}
      >
        <CarouselContent className="h-20 md:h-96">
          {years.map((year, index) => (
            <CarouselItem key={year} className="basis-1/3 flex justify-between items-center">
              <div
                className={`flex aspect-square items-center justify-center px-6 transition-colors duration-700 ${isActive(index) ? "text-[#008080] font-bold" : "text-gray-500"
                  }`}
              >
                <span>{year}</span>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
    )
}

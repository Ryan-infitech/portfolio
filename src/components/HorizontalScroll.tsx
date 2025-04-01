import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useWindowSize } from "react-use";
import { useModal } from "../context/ModalContext";

interface HorizontalScrollProps {
  children: React.ReactNode[];
  currentSection: number;
  setCurrentSection: (section: number) => void;
}

const HorizontalScroll: React.FC<HorizontalScrollProps> = ({
  children,
  currentSection,
  setCurrentSection,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  const { width: windowWidth, height: windowHeight } = useWindowSize();
  const [containerWidth, setContainerWidth] = useState(0);
  const [sectionWidths, setSectionWidths] = useState<number[]>([]);
  const [isScrolling, setIsScrolling] = useState(false);
  const [lastScrollTime, setLastScrollTime] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const { isModalOpen } = useModal(); // Get modal state from context
  const scrollCooldown = 800; // ms cooldown between horizontal scrolls
  const navbarHeight = 72; // estimated height of navbar in pixels

  // Check if we're on mobile
  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, [windowWidth]);

  // Initialize section refs
  useEffect(() => {
    sectionRefs.current = Array(children.length).fill(null);
  }, [children.length]);

  // Recalculate section widths when window size changes or children change
  useEffect(() => {
    const updateSectionWidths = () => {
      if (containerRef.current) {
        const sections = Array.from(containerRef.current.children);

        // Force each section to be exactly one screen width
        const screenWidth = window.innerWidth;
        const widths = sections.map(() => screenWidth);

        setSectionWidths(widths);
        setContainerWidth(screenWidth * sections.length);

        // Apply fixed width to each section
        sections.forEach((section) => {
          const sectionEl = section as HTMLElement;
          sectionEl.style.width = `${screenWidth}px`;
          sectionEl.style.minWidth = `${screenWidth}px`;
          sectionEl.style.minHeight = `calc(100vh - ${navbarHeight}px)`;
          sectionEl.style.maxHeight = `calc(100vh - ${navbarHeight}px)`;
          sectionEl.style.height = `calc(100vh - ${navbarHeight}px)`;
          sectionEl.style.overflowY = "auto";
          sectionEl.style.overflowX = "hidden";
        });
      }
    };

    // Initial calculation
    updateSectionWidths();

    // Add resize listener
    window.addEventListener("resize", updateSectionWidths);

    return () => {
      window.removeEventListener("resize", updateSectionWidths);
    };
  }, [windowWidth, windowHeight, children.length]);

  useEffect(() => {
    // For touch devices
    let touchStartX = 0;
    let touchEndX = 0;
    const minSwipeDistance = 50;

    const handleTouchStart = (e: TouchEvent) => {
      // Don't process touch events when a modal is open
      if (isModalOpen) return;
      touchStartX = e.changedTouches[0].screenX;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      // Don't process touch events when a modal is open
      if (isModalOpen) return;

      touchEndX = e.changedTouches[0].screenX;
      const distance = touchStartX - touchEndX;

      if (Math.abs(distance) > minSwipeDistance) {
        const now = Date.now();
        if (now - lastScrollTime > scrollCooldown && !isScrolling) {
          setIsScrolling(true);
          setLastScrollTime(now);

          if (distance > 0) {
            // Swiped left
            setCurrentSection((prev) =>
              Math.min(prev + 1, children.length - 1)
            );
          } else {
            // Swiped right
            setCurrentSection((prev) => Math.max(prev - 1, 0));
          }

          setTimeout(() => {
            setIsScrolling(false);
          }, 500);
        }
      }
    };

    // For mouse wheel
    const handleWheel = (e: WheelEvent) => {
      // Don't process wheel events when a modal is open
      if (isModalOpen) return;

      const now = Date.now();
      const section = sectionRefs.current[currentSection];

      if (!section) return;

      // Check if the section can be scrolled vertically
      const canScrollUp = section.scrollTop > 0;
      const canScrollDown =
        section.scrollTop < section.scrollHeight - section.clientHeight - 5; // 5px tolerance

      // Determine scroll direction
      const isScrollingDown = e.deltaY > 0;
      const isScrollingUp = e.deltaY < 0;

      // If we can scroll vertically within the section, do that first
      if (
        (isScrollingDown && canScrollDown) ||
        (isScrollingUp && canScrollUp)
      ) {
        // Let the default scroll behavior happen within the section
        return;
      }

      // Otherwise, handle horizontal section navigation with cooldown
      if (now - lastScrollTime > scrollCooldown && !isScrolling) {
        e.preventDefault();
        setIsScrolling(true);
        setLastScrollTime(now);

        if (isScrollingDown) {
          // Scroll down (move right)
          setCurrentSection((prev) => Math.min(prev + 1, children.length - 1));
        } else if (isScrollingUp) {
          // Scroll up (move left)
          setCurrentSection((prev) => Math.max(prev - 1, 0));
        }

        // Reset scrolling state after animation completes
        setTimeout(() => {
          setIsScrolling(false);
        }, 500);
      } else {
        e.preventDefault();
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't process key events when a modal is open
      if (isModalOpen) return;

      const now = Date.now();

      if (now - lastScrollTime > scrollCooldown && !isScrolling) {
        if (e.key === "ArrowRight") {
          setIsScrolling(true);
          setLastScrollTime(now);
          setCurrentSection((prev) => Math.min(prev + 1, children.length - 1));
          setTimeout(() => setIsScrolling(false), 500);
        } else if (e.key === "ArrowLeft") {
          setIsScrolling(true);
          setLastScrollTime(now);
          setCurrentSection((prev) => Math.max(prev - 1, 0));
          setTimeout(() => setIsScrolling(false), 500);
        }
      }
    };

    // Add all event listeners
    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [
    children.length,
    currentSection,
    lastScrollTime,
    isScrolling,
    setCurrentSection,
    isModalOpen, // Added isModalOpen dependency
  ]);

  const calculateX = () => {
    if (sectionWidths.length === 0) return 0;
    return -currentSection * window.innerWidth;
  };

  return (
    <div className="h-screen w-screen overflow-hidden">
      <div className="pt-[72px] h-full">
        <motion.div
          ref={containerRef}
          className="flex h-full"
          animate={{ x: calculateX() }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          style={{ width: `${containerWidth}px` }}
        >
          {children.map((child, index) => (
            <div
              key={index}
              ref={(el) => (sectionRefs.current[index] = el)}
              className="overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-indigo-500 scrollbar-track-gray-200 dark:scrollbar-thumb-indigo-400 dark:scrollbar-track-gray-700"
            >
              {child}
            </div>
          ))}
        </motion.div>

        {/* Navigation Dots - Hide when modal is open */}
        {!isModalOpen && (
          <div className="fixed bottom-4 md:bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 md:space-x-3 z-40 px-2 py-1 md:py-1.5 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-full">
            {children.map((_, index) => (
              <motion.button
                key={index}
                className={`w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 rounded-full ${
                  currentSection === index
                    ? "bg-indigo-600 dark:bg-indigo-400"
                    : "bg-gray-300 dark:bg-gray-600"
                }`}
                onClick={() => setCurrentSection(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                aria-label={`Go to section ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default HorizontalScroll;

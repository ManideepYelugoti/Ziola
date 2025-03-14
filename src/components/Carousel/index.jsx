import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

export default function VerticalCarousel({ direction = "top", images = [] }) {
  const containerRef = useRef(null);
  const speed = 15; // Adjust speed for smooth movement
  const totalImages = [...images, ...images]; // Duplicate images for seamless looping

  useEffect(() => {
    if (!containerRef.current) return;
    containerRef.current.scrollTop = containerRef.current.scrollHeight / 4;
    
    const scroll = () => {
      if (containerRef.current) {
        if (direction === "top") {
          containerRef.current.scrollTop += speed;
          if (containerRef.current.scrollTop >= containerRef.current.scrollHeight / 2) {
            containerRef.current.scrollTop = 0;
          }
        } else {
          containerRef.current.scrollTop -= speed;
          if (containerRef.current.scrollTop <= 0) {
            containerRef.current.scrollTop = containerRef.current.scrollHeight / 2;
          }
        }
      }
    };
    
    const interval = setInterval(scroll, 20);
    return () => clearInterval(interval);
  }, [direction]);

  return (
    <div ref={containerRef} className="w-80 h-96 overflow-hidden relative flex flex-col" style={{ scrollBehavior: "smooth" }}>
      <motion.div className="flex flex-col">
        {totalImages.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt="carousel"
            className="w-full h-48 object-cover rounded-lg border-4 border-transparent hover:border-[#1F40E9]"
          />
        ))}
      </motion.div>
    </div>
  );
}
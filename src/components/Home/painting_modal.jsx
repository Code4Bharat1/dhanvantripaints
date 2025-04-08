"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Painting_modal({ isOpen, setIsOpen }) {
  const initialImages = [
    { src: "/images/external_image_edited.jpeg", alt: "Paint 1",className: "w-[120px] h-[120px]" },
    { src: "/images/external2.jpeg", alt: "Paint 2",className: "w-[120px] h-[120px]" },
    { src: "/images/modal1.jpeg", alt: "Paint 3",className: "w-[120px] h-[120px]" },
    { src: "/images/modal2.jpeg", alt: "Paint 4" ,className: "w-[120px] h-[120px]"},
    { src: "/images/modal3.jpeg", alt: "Paint 4" ,className: "w-[200px] h-[120px]"},
    { src: "/images/repair2.jpeg", alt: "Paint 4" ,className: "w-[120px] h-[120px]"},
  ];

  const [shuffledImages, setShuffledImages] = useState(initialImages);

  useEffect(() => {
    let interval;

    if (isOpen) {
      document.body.style.overflow = "hidden";

      // Shuffle every second
      interval = setInterval(() => {
        const shuffled = [...initialImages].sort(() => Math.random() - 0.5);
        setShuffledImages(shuffled);
      }, 3000);
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      clearInterval(interval); // Clear shuffle interval
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-50 backdrop-blur-sm">
      <div className="bg-white rounded-lg p-4 w-[90%] max-w-3xl shadow-2xl relative">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-2 right-3 text-gray-500 hover:text-red-500 text-xl font-bold"
        >
          &times;
        </button>

        <h2 className="text-2xl font-semibold text-center mb-4">Home Paintings</h2>

        <motion.div
          className="grid grid-cols-2 gap-4"
          layout
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {shuffledImages.map((img) => (
            <motion.img
              key={img.src}
              src={img.src}
              alt={img.alt}
              className="rounded-md md:h-[200px] h-[110px]"
              layout
              transition={{ type: "spring", stiffness: 80, damping: 20 }}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}

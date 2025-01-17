// components/Slider.tsx
"use client";
import { useState, useEffect } from 'react';

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "/img/mahakam/mahakam1.jpg",
    "/img/mahakam/mahakam2.jpg",
    "/img/mahakam/mahakam2.jpg",
    "/img/mahakam/mahakam2.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((src, index) => (
          <div key={index} className="flex-shrink-0 w-full h-full">
            <img
              src={src}
              alt={`Slide ${index}`}
              className="object-cover w-full h-full rounded-b-3xl"
            />
          </div>
        ))}
      </div>
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 p-2">
        <button
          onClick={() =>
            setCurrentIndex((prevIndex) =>
              prevIndex === 0 ? images.length - 1 : prevIndex - 1
            )
          }
          className="bg-white rounded-full p-2 shadow-lg"
        >
          &#8249;
        </button>
      </div>
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2 p-2">
        <button
          onClick={() =>
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
          }
          className="bg-white rounded-full p-2 shadow-lg"
        >
          &#8250;
        </button>
      </div>
    </div>
  );
};

export default Slider;

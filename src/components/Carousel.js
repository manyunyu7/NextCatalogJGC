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
    }, 1200); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full overflow-hidden mx-auto max-w-[70%] lg:max-w-[70%]">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((src, index) => (
          <div key={index} className="flex-shrink-0 w-full h-full px-4">
            <div className="w-full h-full max-h-[20%] sm:max-h-[25%] lg:max-h-[20%]">
              <img
                src={src}
                alt={`Slide ${index}`}
                className="object-cover w-full h-full rounded-b-3xl"
              />
            </div>
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

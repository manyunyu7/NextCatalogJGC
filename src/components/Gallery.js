"use client"
import { useState, useEffect } from 'react';
import Image from 'next/image';

const isAutoSlideEnabled = false;

const items = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  title: `Item ${i + 1}`,
  description: `This is the description for item ${i + 1}.`,
  images: [
    `https://picsum.photos/500/300?random=${i + 1}`,
    `https://picsum.photos/500/300?random=${i + 2}`,
    `https://picsum.photos/500/300?random=${i + 3}`,
  ],
  date: `${Math.floor(Math.random() * 30) + 1} March`,
  readTime: `${Math.floor(Math.random() * 10) + 1} mins`,
}));

export default function Gallery() {
  return (
    <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {items.map((item) => (
          <div key={item.id} className="relative">
            <div className="rounded-3xl overflow-hidden shadow-lg border border-gray-200">
              <GalleryItem item={item} />
            </div>
            <div className="absolute top-[-10px] right-[-10px] mt-2 mr-2">
              <Image
                src="/img/promo.png"
                alt="Promo"
                width={80}
                height={80}
                unoptimized
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function GalleryItem({ item }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (isAutoSlideEnabled) {
      const intervalId = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === item.images.length - 1 ? 0 : prevIndex + 1
        );
      }, 3000);

      return () => clearInterval(intervalId);
    }
  }, [item.images.length]);

  const handlePrev = (e) => {
    e.preventDefault();
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? item.images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = (e) => {
    e.preventDefault();
    setCurrentIndex((prevIndex) =>
      prevIndex === item.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative">
      <div className="overflow-hidden relative">
        <Image
          className="w-full opacity-100 transition-opacity duration-1000 ease-in-out"
          src={item.images[currentIndex]}
          alt={`${item.title} image`}
          width={500}
          height={300}
          unoptimized
        />
        <div className="absolute inset-0 bg-gray-900 opacity-25"></div>
        <button
          onClick={handlePrev}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white text-gray-800 rounded-full p-2 hover:bg-gray-200 transition duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-4 h-4"
          >
            <path
              fillRule="evenodd"
              d="M7.707 15.293a1 1 0 010-1.414L4.414 10H17a1 1 0 110 2H4.414l3.293 3.293a1 1 0 11-1.414 1.414l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white text-gray-800 rounded-full p-2 hover:bg-gray-200 transition duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-4 h-4"
          >
            <path
              fillRule="evenodd"
              d="M12.293 15.293a1 1 0 010-1.414L15.586 10H3a1 1 0 110-2h12.586l-3.293-3.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      <div className="px-6 py-4">
        <a
          href="#"
          className="font-semibold text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out"
        >
          {item.title}
        </a>
        <p className="text-gray-500 text-sm">{item.description}</p>
      </div>
      <div className="px-6 py-4 flex flex-row items-center">
        <span className="py-1 text-sm font-regular text-gray-900 mr-1 flex flex-row items-center">
          <svg
            height="13px"
            width="13px"
            viewBox="0 0 512 512"
            className="mr-1"
          >
            <g>
              <path d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M277.333,256c0,11.797-9.536,21.333-21.333,21.333h-85.333c-11.797,0-21.333-9.536-21.333-21.333s9.536-21.333,21.333-21.333h64v-128c0-11.797,9.536-21.333,21.333-21.333s21.333,9.536,21.333,21.333V256z"></path>
            </g>
          </svg>
          {item.readTime} read
        </span>
      </div>
    </div>
  );
}

"use client";

import Image from "next/image";
import { useState } from "react";

const PropertyCard = ({ property }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next image
  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < property.images.length - 1 ? prevIndex + 1 : 0
    );
  };

  // Function to go to the previous image
  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : property.images.length - 1
    );
  };

  return (
    <div className="relative mb-5 w-[375px] h-[550px]">
      {/* Banner Promo */}
      <div className="absolute top-[-5px] right-[-5px] z-10">
        <Image
          src={`/${property.promo_image}`}
          alt="Promo"
          width={100}
          height={100}
          className="object-cover"
        />
      </div>

      {/* Slider Card */}
      <div className="relative bg-white border border-gray-200 rounded-[21.23px] shadow dark:border-gray-700 overflow-hidden">
        {/* Image Slider */}
        <div className="relative h-[239.75px]">
          <div
            className="flex transition-transform duration-300"
            style={{
              transform: `translateX(-${currentIndex * 375}px)`,
            }}
          >
            {property.images.map((image, index) => (
              <div key={index} className="flex-shrink-0 w-[375px]">
                <Image
                  src={`/${image}`}
                  alt={`Image ${index + 1}`}
                  width={375}
                  height={239.75}
                  className="rounded-t-[21.23px] object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevImage}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 p-2"
        >
          <Image
            src="/img/Right.png"
            alt="Right"
            width={32}
            height={32}
            className="object-contain"
          />
        </button>

        <button
          onClick={nextImage}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2"
        >
          {/* <Image
            src="/img/Left.png"
            alt="Left"
            width={32}
            height={32}
            className="object-contain"
          /> */}
        </button>

        {/* Card Content */}
        <div className="p-5">
          {/* Title */}
          <a href={property.link}>
            <h5 className="mb-2 font-semibold text-[18px] text-[#545454] leading-[27px] truncate">
              {property.title}
            </h5>
          </a>

          {/* Category and Area */}
          <div className="flex gap-2 mb-3">
            <span className="px-3 text-[13px] text-[#545454] rounded-full border border-[#545454]">
              {property.category}
            </span>
            <span className="px-3 text-[13px] text-[#545454] rounded-full border border-[#545454]">
              {`LB: ${property.area} m²`}
            </span>
          </div>

          {/* Property Details */}
          <div className="flex items-center space-x-4 mb-4">
            {property.property_details.map((detail, index) => (
              <div key={index} className="flex items-center w-[40px]">
                <Image
                  src={`/${detail.icon}`}
                  alt={detail.label}
                  width={35}
                  height={35}
                  className="object-contain"
                />
                <span className="text-[14px] text-[#000000]">{detail.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Price */}
        <div className="p-5 border-t border-slate-950 pt-3">
          <span className="font-normal text-[13px] text-[#545454]">Mulai dari</span>
          <span className="font-semibold text-[20px] text-[#4f935f]">
            {property.price_label} {property.price_value}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;

"use client";
import React, { useState } from "react";
import Image from "next/image";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = ["/tesla.jpg", "/thor.jpg", "/ox.jpg"];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="flex w-[100%]">
      <button
        onClick={prevSlide}
        className="absolute left-0 bottom-50 z-2 md:static"
      >
        <ArrowBackIosNewIcon className="text-[#2c3f58]" />
      </button>
      <div className="relative w-full h-[300px] md:h-[500px] lg:h[650px] xl:h-[800px] mx-auto my-5 px-3">
        <div className="relative w-full h-full">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute top-0 left-0 w-full h-full ${
                index === currentSlide ? "block" : "hidden"
              }`}
            >
              <Image
                src={slide}
                alt={`Slide ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className="rounded-xl"
              />
            </div>
          ))}
        </div>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentSlide
                  ? "bg-[#2c3f58]"
                  : "border-1 border-[#2c3f58]"
              }`}
              aria-label={`Ir para o slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
      <button
        onClick={nextSlide}
        className="absolute right-0 bottom-50 z-2 md:static"
      >
        <ArrowForwardIosIcon className="text-[#2c3f58]" />
      </button>
    </div>
  );
};

export default Carousel;

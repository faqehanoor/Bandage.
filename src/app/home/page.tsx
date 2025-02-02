'use client';

import React from "react";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter"; 
import HeroImage from "@/app/shop-hero-1-product-slide-1.jpg";

export default function HomePage() {  // Corrected component name to 'Page'
  return (
    <div className="relative h-screen w-full">
      {/* Background Image */}
      <div>
        <Image
          src={HeroImage}
          alt="Hero Background"
          layout="fill"
          objectFit="full"
          quality={100}
          className="absolute inset-0 -z-10"
        />
      </div>

      {/* Content Overlay */}
      <div className="flex flex-col justify-center h-full text-white max-w-2xl px-6 md:px-10">
        {/* Heading */}
        <h1
          className="text-xl md:text-2xl font-semibold mb-4 px-5 py-5 tracking-widest animate-fade-in"
        >
          Summer 2020
        </h1>

        {/* Typewriter Effect */}
        <div
          className="text-4xl md:text-5xl font-bold mb-4 px-5 py-5 animate-fade-in"
          style={{ animationDelay: "0.2s" }}
        >
          <span>NEW </span>
          <span style={{ color: "#252B42" }}>
            <Typewriter
              words={["COLLECTION", "ARRIVALS", "TRENDS"]}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </span>
        </div>

        {/* Subtitle */}
        <p
          className="text-sm md:text-base mb-6 px-5 animate-fade-in"
          style={{ animationDelay: "0.4s" }}
        >
          We know how large objects move <br />
          but things on a small scale
        </p>

        {/* Button */}
        <div className="px-5 py-5 animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <a  href="/products"
            className="bg-green-600 text-white px-9 py-2 mt-4 hover:bg-green-700 transition-transform transform hover:scale-110 shadow-lg"
            aria-label="Shop the Summer 2020 collection"
          >
            SHOP NOW!
          </a>
        </div>
      </div>
    </div>
  );
}

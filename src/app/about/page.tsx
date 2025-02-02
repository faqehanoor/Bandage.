"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import none from "@/app/none.png";
import media from '@/app/media bg-cover.png'
import { FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import media1 from '@/app/media.png';
import media3 from '@/app/media (1).png';
import user from '@/app/user.jpg';
import col3 from '@/app/col-md-2 (1).png';
import col2 from '@/app/fa-brands-2.png';
import col1 from '@/app/col-md-2.png'
import col4 from '@/app/fa-brands-4.png'
import col5 from '@/app/fa-brands-5.png'
import col6 from  '@/app/fa-brands-6.png'
import girl from '@/app/unsplash_vjMgqUkS8q8.png'
import Footer from "../components/Footer";

export default function AboutPage() {
  // State to toggle hamburger menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const targetValues = [160000, 190000, 150000, 180000]; // Target numbers for counting

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const counters = document.querySelectorAll('.animate-counter');
    counters.forEach((counterElement, index) => {
      let start = 0;
      const end = targetValues[index];
      const duration = 2000; // Duration in ms (2 seconds)
      const stepTime = Math.abs(Math.floor(duration / end));

      const interval = setInterval(() => {
        start += 1;
        counterElement.textContent = `${start}K`;
        if (start >= end) {
          clearInterval(interval);
        }
      }, stepTime);
    });
  }, []);

  return (
    <div className="bg-white min-h-screen flex flex-col py-10">
      {/* Container for all elements */}
      <div className="w-full flex flex-col md:flex-row md:justify-between items-center md:items-start px-6 md:px-16">
        {/* Logo Section */}
        <div className="logo mb-8 md:mb-0">
          <Link href="/">
            <span className="text-3xl font-bold text-blue-950 hover:text-blue-800 transition duration-300">Bandage</span>
          </Link>
        </div>

        {/* Hamburger Menu for small screens */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-blue-950 text-3xl">
            {isMenuOpen ? "X" : "☰"} {/* Display hamburger icon or close icon */}
          </button>
        </div>

        {/* Navigation Links */}
        <div
          className={`mb-8 md:mb-0 ${isMenuOpen ? "block animate-slideIn" : "hidden"} md:flex md:space-x-8 md:space-y-0 transition duration-500`}
        >
          <ul className="text-lg space-y-4 md:flex md:space-x-8 md:space-y-0">
            <li>
              <Link href="/home">
                <span className="text-gray-500 font-bold hover:text-blue-800">Home</span>
              </Link>
            </li>
            <li>
              <Link href="/product">
                <span className="text-gray-500 font-bold hover:text-blue-800">Products</span>
              </Link>
            </li>
            <li>
              <Link href="/pricing">
                <span className="text-gray-500 font-bold hover:text-blue-800">Pricing</span>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <span className="text-gray-500 font-bold hover:text-blue-800">Contact</span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Buttons */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <Link href="/login" className="text-blue-500 font-bold px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300">
            Login
          </Link>
          <Link href="/pricing">
            <button className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-green-700 transition duration-300">
              Become a Member
            </button>
          </Link>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-10 md:py-20">
        {/* Text on the Left */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0 animate-fadeIn">
          <h1 className="text-blue-950 font-bold text-2xl md:text-3xl px-5 py-5 uppercase">About Company</h1>
          <h2 className="text-blue-950 font-bold text-3xl px-5 py-5 uppercase mt-4">About Us</h2>
          <p className="text-gray-500 text-xl mb-8 ml-5 py-4">
            We know how large objects will act, <br /> but things on a small scale
          </p>
          <Link href="/get-quote" className="flex items-center">
            <button className="bg-blue-400 text-white px-10 py-5 ml-5 rounded-md hover:bg-blue-500 transition duration-300">
              Get Quote Now
            </button>
          </Link>
        </div>

        {/* Image on the Right */}
        <div className="w-full md:w-1/2 animate-fadeIn">
          <Image src={none} alt="none" className="w-full md:w-[387px] md:h-[440px] mx-auto md:ml-20" />
        </div>
      </div>

      <p className="text-gray-400 text-center">
        Problems trying to resolve the conflicts between two major realms of
        <br />
        Classical Physics: Newtonian mechanics
      </p>

      {/* Number Counter Section */}
      <div className="flex flex-wrap justify-center mt-10 md:mt-20 space-x-8">
        {/* Display numbers on the same line */}
        <span className="text-3xl font-bold text-blue-950 animate-counter">0K</span>
        <span className="text-3xl font-bold text-blue-950 animate-counter">0K</span>
        <span className="text-3xl font-bold text-blue-950 animate-counter">0K</span>
        <span className="text-3xl font-bold text-blue-950 animate-counter">0K</span>
      </div>
      <div className="flex justify-center items-center">
  <Image src={media} alt="media" className="px-20 py-20" />
</div>
<div>
  {/* Heading and Subheading */}
  <h1 className="text-center text-blue-950 font-bold text-4xl py-5">Meet our team</h1>
  <p className="text-gray-400 text-center">
    Problems trying to resolve the conflicts between two major realms of
    <br />
    Classical Physics: Newtonian mechanics
  </p>

  {/* Cards Container */}
  <div className="flex flex-wrap justify-center gap-10 mt-10">
    {/* Card 1 */}
    <div className="bg-white p-6 text-center w-full sm:w-1/2 lg:w-1/3 xl:w-1/4">
      <div className="mb-4">
        {/* Placeholder for team image */}
        <Image src={media1} width={316} height={231} alt="Team Member 1"/>
      </div>
      <h2 className="text-blue-950 text-xl font-bold">John Doe</h2>
      <p className="text-gray-400 mb-4">Front-End Developer</p>
      {/* Social Media Icons */}
      <div className="flex justify-center space-x-4">
        <FaLinkedin />
        <FaYoutube />
        <FaTwitter />
      </div>
    </div>

    {/* Card 2 */}
    <div className="bg-white p-6 text-center w-full sm:w-1/2 lg:w-1/3 xl:w-1/4">
      <div className="mb-4">
        {/* Placeholder for team image */}
        <Image src={user} width={316} height={231} alt="Team Member 2"/>
      </div>
      <h2 className="text-blue-950 text-xl font-bold">Jane Smith</h2>
      <p className="text-gray-400 mb-4">Back-End Developer</p>
      {/* Social Media Icons */}
      <div className="flex justify-center space-x-4">
        <FaLinkedin />
        <FaYoutube />
        <FaTwitter />
      </div>
    </div>

    {/* Card 3 */}
    <div className="bg-white p-6 text-center w-full sm:w-1/2 lg:w-1/3 xl:w-1/4">
      <div className="mb-4">
        {/* Placeholder for team image */}
        <Image src={media3} width={316} height={231} alt="Team Member 3"/>
      </div>
      <h2 className="text-blue-950 text-xl font-bold">Sam Wilson</h2>
      <p className="text-gray-400 mb-4">UI/UX Designer</p>
      {/* Social Media Icons */}
      <div className="flex justify-center space-x-4">
        <FaLinkedin />
        <FaYoutube />
        <FaTwitter />
      </div>
    </div>
  </div>




</div>
<div className="bg-gray-100">
  <h1 className="text-4xl text-blue-950 font-bold px-10 py-10 text-center" >Big Companies Are Here</h1>
  <p className="text-gray-400 text-center py-6">
    Problems trying to resolve the conflicts between two major realms of
    <br />
    Classical Physics: Newtonian mechanics
  </p>

</div>

<div className="flex justify-center space-x-20 sm:w-1/1 px-10 py-10">
<Image src={col1} alt=""/>
<Image src={col2} alt=""/>
<Image src={col3} alt=""/>
<Image src={col4} alt=""/>
<Image src={col5} alt=""/>
<Image src={col6} alt=""/>
</div>


<div className="bg-blue-600 px-4 py-8 lg:px-20 lg:py-20 flex flex-col lg:flex-row items-center">
  <div className="text-center lg:text-left lg:w-1/2">
    <h1 className="text-white text-2xl font-bold uppercase mb-4">Work with us</h1>
    <h2 className="text-white text-4xl font-bold mb-4">Now Lets Grow Yours</h2>
    <p className="text-white text-lg mb-6">mkklslpw</p>
    <button className="bg-white text-blue-600 font-bold px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300">
      Button
    </button>
  </div>

  {/* Right Picture */}
  <div className="mt-8 lg:mt-0 lg:w-1/2 flex justify-center">
    <Image src={girl} alt="Girl Image" className="w-full h-auto max-w-xs lg:max-w-full" />
  </div>
</div>


<div>
  <Footer />
</div>


  </div>



  
  );
}

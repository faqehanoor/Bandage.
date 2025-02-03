"use client"
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import Footer from "../components/Footer";

// Import Images
import none from "@/app/none.png";
import media from "@/app/media bg-cover.png";
import media1 from "@/app/media.png";
import media3 from "@/app/media (1).png";
import user from "@/app/user.jpg";
import girl from "@/app/unsplash_vjMgqUkS8q8.png";

// Company Logos
import col1 from "@/app/col-md-2.png";
import col2 from "@/app/fa-brands-2.png";
import col3 from "@/app/col-md-2 (1).png";
import col4 from "@/app/fa-brands-4.png";
import col5 from "@/app/fa-brands-5.png";
import col6 from "@/app/fa-brands-6.png";

export default function AboutPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [counts, setCounts] = useState([0, 0, 0, 0]); // State for counters
  const targetValues = [160000, 190000, 150000, 180000];

  useEffect(() => {
    const interval = setInterval(() => {
      setCounts((prevCounts) =>
        prevCounts.map((count, index) =>
          count < targetValues[index] ? count + 1000 : count
        )
      );
    }, 10);

    return () => clearInterval(interval);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="bg-white min-h-screen flex flex-col py-10">
      {/* Navigation */}
      <div className="w-full flex flex-col md:flex-row justify-between items-center px-6 md:px-16">
        <Link href="/" className="text-3xl font-bold text-blue-950 hover:text-blue-800 transition duration-300">
          Bandage
        </Link>

        {/* Hamburger Menu */}
        <button onClick={toggleMenu} className="md:hidden text-blue-950 text-3xl">
          {isMenuOpen ? "✖" : "☰"}
        </button>

        {/* Nav Links */}
        <nav className={`md:flex ${isMenuOpen ? "block" : "hidden"} transition duration-500`}>
          <ul className="text-lg space-y-4 md:flex md:space-x-8 md:space-y-0">
            {["Home", "Products", "Pricing", "Contact"].map((item, idx) => (
              <li key={idx}>
                <Link href={`/${item.toLowerCase()}`} className="text-gray-500 font-bold hover:text-blue-800">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Auth Buttons */}
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

      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center px-6 md:px-20 py-10 md:py-20">
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-blue-950 font-bold text-3xl uppercase py-10">About Company</h1>
          <h2 className="text-blue-950 font-bold text-3xl uppercase mt-4">About Us</h2>
          <p className="text-gray-500 text-xl my-4">We know how large objects will act, but things on a small scale.</p>
          <Link href="/get-quote">
            <button className="bg-blue-400 text-white px-10 py-5 rounded-md hover:bg-blue-500 transition duration-300">
              Get Quote Now
            </button>
          </Link>
        </div>

        <Image src={none} alt="Company Overview" className="w-full md:w-[387px] md:h-[440px]" />
      </div>

      {/* Counter Section */}
      <div className="flex justify-center space-x-8 mt-10">
        {counts.map((count, idx) => (
          <span key={idx} className="text-3xl font-bold text-blue-950">{count.toLocaleString()}K</span>
        ))}
      </div>

      {/* Media Section */}
      <div className="flex justify-center items-center">
        <Image src={media} alt="Media Background" className="px-20 py-20" />
      </div>

      {/* Meet the Team */}
      <div>
        <h1 className="text-center text-blue-950 font-bold text-4xl py-5">Meet our team</h1>
        <p className="text-gray-400 text-center">Problems trying to resolve the conflicts between two major realms of Classical Physics: Newtonian mechanics</p>

        <div className="flex flex-wrap justify-center gap-10 mt-10">
          {[{ img: media1, name: "John Doe", role: "Front-End Developer" },
            { img: user, name: "Jane Smith", role: "Back-End Developer" },
            { img: media3, name: "Sam Wilson", role: "UI/UX Designer" }].map((team, idx) => (
            <div key={idx} className="bg-white p-6 text-center w-72">
              <Image src={team.img} width={316} height={231} alt={team.name} />
              <h2 className="text-blue-950 text-xl font-bold">{team.name}</h2>
              <p className="text-gray-400">{team.role}</p>
              <div className="flex justify-center space-x-4 mt-3">
                <FaLinkedin />
                <FaYoutube />
                <FaTwitter />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Big Companies */}
      <div className="bg-gray-100 py-10">
        <h1 className="text-4xl text-blue-950 font-bold text-center">Big Companies Are Here</h1>
        <p className="text-gray-400 text-center">Problems trying to resolve the conflicts between two major realms of Classical Physics: Newtonian mechanics</p>
      </div>

      <div className="flex justify-center space-x-10 px-10 py-10">
        {[col1, col2, col3, col4, col5, col6].map((logo, idx) => (
          <Image key={idx} src={logo} alt={`Company Logo ${idx + 1}`} className="w-20 h-20" />
        ))}
      </div>

      {/* Work With Us */}
      <div className="bg-blue-600 px-4 py-8 lg:px-20 lg:py-20 flex flex-col lg:flex-row items-center">
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-white text-2xl font-bold uppercase">Work with us</h1>
          <h2 className="text-white text-4xl font-bold">Now Lets Grow Yours</h2>
          <button className="mt-4 bg-white text-blue-600 font-bold px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300">
            Get Started
          </button>
        </div>
        <Image src={girl} alt="Work With Us" className="mt-6 lg:mt-0 lg:w-1/2" />
      </div>

      <Footer />
    </div>
  );
}

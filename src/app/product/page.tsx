"use client"
import React, { useState } from "react"; 
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"; 
import Image from "next/image"; 
import col1 from "@/app/card-item (2).png"; 
import col2 from '@/app/col-md-4.png'; 
import col3 from '@/app/col-md-4 (1).png'; 
import col4 from  '@/app/col-md-4 (2).png'; 
import col5 from  '@/app/col-md-3 (1).png'; 
import col6 from  '@/app/Product card.png'; 
import col7 from  '@/app/col-md-3 (2).png'; 
import col8 from  '@/app/col-md-3 (3).png'; 
import col9 from  '@/app/col-md-3 (4).png'; 
import col10 from  '@/app/col-md-3 (5).png'; 
import col11 from  '@/app/col-md-3 (6).png'; 
import col14 from  '@/app/col-md-3 (7).png';
import Footer from "../components/Footer";
import Link from "next/link";

const ProductListPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for toggling the menu

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      {/* Header */}
      <header className="bg-green-600 text-white p-4 flex justify-between items-center shadow-lg">
        <div>
          <p className="text-sm">📞 (225) 555-0118 | michelle.rivera@example.com</p>
          <p className="text-sm">Follow us and get a chance to win 80% off</p>
        </div>
        <div className="flex items-center space-x-3">
          <FaFacebook />
          <FaTwitter />
          <FaInstagram />
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white py-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">Bandage</h1>
          
          {/* Hamburger Icon for Mobile */}
          <div className="md:hidden flex items-center space-x-3">
            <button onClick={toggleMenu} className="text-gray-600 hover:text-green-600">
              {isMenuOpen ? "Close" : "Menu"}
            </button>
          </div>
          
          {/* Menu */}
          <ul className={`md:flex space-x-6 text-gray-600 font-semibold ${isMenuOpen ? "flex-col absolute bg-white left-0 right-0 top-16 shadow-md p-4" : "hidden md:flex"}`}>
            <Link href='/home' className="hover:text-green-600 cursor-pointer">Home</Link>
            <Link href='/products' className="hover:text-green-600 cursor-pointer">Shop</Link>
            <Link href='/about' className="hover:text-green-600 cursor-pointer">About</Link>
            <Link href='/blog' className="hover:text-green-600 cursor-pointer">Blog</Link>
            <Link href='/contact' className="hover:text-green-600 cursor-pointer">Contact</Link>
            <Link href='/home' className="hover:text-green-600 cursor-pointer">Pages</Link>
          </ul>

          <div>
            <button className="text-blue-500 border-2 border-blue-500 px-4 py-2 rounded-lg hover:bg-blue-500 hover:text-white transition">
              Login / Register
            </button>
          </div>
        </div>
      </nav>

      {/* Categories Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">Shop</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {[col1, col2, col3, col4, col5, col6, col7, col8, col9, col10, col11, col14].map((image, index) => (
              <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transform transition duration-300">
                <Image
                  src={image}
                  alt={`Category ${index + 1}`}
                  className="w-full h-90 object-cover"
                  width={400}
                  height={300}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted Brands */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Trusted by Over 4,000 Big Companies</h3>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default ProductListPage;

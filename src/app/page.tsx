"use client";

import BlueHeader from "./components/BlueHeader";
import ClassicProduct from "./components/ClassicProduct";
import EditiorsPick from "./components/EditiorsPick";
import FeaturedPost from "./components/FeaturedPost";
import FeaturedProducts from "./components/FeaturedProducts";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import NeuralUniverse from "./components/NeuralUniverse";
import HomePage from "@/app/home/page";



export default function MainHome() {
  return (
    <div>
  
      <BlueHeader />
      <Navbar />
      <HomePage />
      <EditiorsPick />
      <FeaturedProducts />
      <ClassicProduct />
      <NeuralUniverse />
      <FeaturedPost />
      <Footer />
    </div>
  );
}

import React from "react";
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import pic from '@/app/none (1).png'

const ContactSection = () => {
  return (
    <section className="flex flex-wrap items-center p-10 bg-white">
      <div className="w-full md:w-1/2 space-y-4">
        <h4 className="text-sm font-semibold text-gray-600">CONTACT US</h4>
        <h1 className="text-4xl font-bold text-gray-800">
          Get in touch today!
        </h1>
        <p className="text-gray-600">
          We know how large objects will act, but things on a small scale.
        </p>
        <div className="space-y-2">
          <p className="font-semibold">Phone: +451 215 215</p>
          <p className="font-semibold">Fax: +451 215 215</p>
        </div>
        <div className="flex space-x-4 text-gray-600">
          <FaTwitter size={20} />
          <FaFacebook size={20} />
          <FaInstagram size={20} />
          <FaLinkedin size={20} />
        </div>
      </div>
      <div className="w-full md:w-1/2 relative">
        <div className="absolute top-0 left-1/4 w-96 h-96 "></div>
        <Image
          src={pic}
          alt="Family Shopping"
          className="w-full"
          width={0}
          height={0}
        />
      </div>
    </section>
  );
};

export default ContactSection;

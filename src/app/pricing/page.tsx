import React from 'react';
import Image from 'next/image';
import col3 from '@/app/col-md-2 (1).png';
import col2 from '@/app/fa-brands-2.png';
import col1 from '@/app/col-md-2.png';
import col4 from '@/app/fa-brands-4.png';
import col5 from '@/app/fa-brands-5.png';
import col6 from '@/app/fa-brands-6.png';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import Footer from '../components/Footer';

export default function PricingPage() {
  return (
    <div className="bg-gray-100 min-h-screen py-10">
      {/* Pricing Section Header */}
      <header className="text-center">
        <h1 className="text-gray-400 uppercase text-2xl font-bold px-20 py-10">
          Pricing
        </h1>
        <h2 className="text-blue-950 text-5xl font-bold">Simple Pricing</h2>
        <h3 className="text-blue-950 text-3xl font-bold px-10 py-10">
          Pricing Plans
        </h3>
      </header>

      {/* Pricing Cards */}
      <section className="flex flex-col md:flex-row justify-center space-y-6 md:space-y-0 md:space-x-6 px-10 overflow-x-auto">
        {/* Free Plan */}
        <div className="bg-white border border-gray-200 shadow-lg rounded-lg w-full md:w-1/4 p-6 text-center">
          <h3 className="text-blue-950 text-2xl font-bold">Free</h3>
          <p className="text-gray-400 text-xl mt-4">$0/month</p>
          <ul className="mt-6 space-y-3 text-gray-500">
            <li>Basic Features</li>
            <li>1 User Account</li>
            <li>Email Support</li>
          </ul>
          <button className="mt-6 bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition">
            Get Started
          </button>
        </div>

        {/* Standard Plan */}
        <div className="bg-blue-950 border border-blue-600 shadow-lg rounded-lg w-full md:w-1/4 p-6 text-center">
          <h3 className="text-white text-2xl font-bold">Standard</h3>
          <p className="text-gray-400 text-xl mt-4">$29/month</p>
          <ul className="mt-6 space-y-3 text-gray-500">
            <li>All Free Features</li>
            <li>5 User Accounts</li>
            <li>Priority Support</li>
          </ul>
          <button className="mt-6 bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition">
            Choose Plan
          </button>
        </div>

        {/* Premium Plan */}
        <div className="bg-white border border-gray-200 shadow-lg rounded-lg w-full md:w-1/4 p-6 text-center">
          <h3 className="text-blue-950 text-2xl font-bold">Premium</h3>
          <p className="text-gray-400 text-xl mt-4">$99/month</p>
          <ul className="mt-6 space-y-3 text-gray-500">
            <li>All Standard Features</li>
            <li>Unlimited User Accounts</li>
            <li>Dedicated Support</li>
          </ul>
          <button className="mt-6 bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition">
            Choose Premium
          </button>
        </div>
      </section>

      {/* Trusted Companies Section */}
      <section className="px-10 py-10 text-center">
        <p className="text-4xl font-semibold">Trusted Over 4,000 Big Companies</p>
        <div className="flex flex-wrap justify-center gap-6 mt-10">
          <Image src={col1} alt="Company Logo 1" />
          <Image src={col2} alt="Company Logo 2" />
          <Image src={col3} alt="Company Logo 3" />
          <Image src={col4} alt="Company Logo 4" />
          <Image src={col5} alt="Company Logo 5" />
          <Image src={col6} alt="Company Logo 6" />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-10">
        <h1 className="text-4xl text-center font-bold px-20 py-10 text-blue-950">
          Pricing FAQs
        </h1>
        <p className="text-gray-400 text-center">
          Problems trying to resolve the conflicts between two major realms of
          <br />
          Classical Physics: Newtonian mechanics
        </p>
      </section>

      <div className="grid bg-white grid-cols-1 md:grid-cols-2 gap-8 px-10 md:px-20 pb-20">
        {[...Array(6)].map((_, index) => (
          <div
            key={index}
            className="flex items-start space-x-4 p-6 bg-white border rounded-lg shadow-sm"
          >
            {/* Icon */}
            <div className="text-blue-500 text-2xl">➤</div>
            {/* FAQ Content */}
            <div>
              <h3 className="text-blue-950 font-bold text-lg">
                The quick fox jumps over the lazy dog
              </h3>
              <p className="text-gray-500 mt-2">
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent. RELIT official consequent door ENIM RELIT Mollie.
                Excitation venial consequent sent nostrum met.
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-white py-10 px-5 text-center">
  <h1 className="text-center text-blue-950 text-4xl font-bold">
    Start your 14-day free trial
  </h1>
  <p className="text-gray-500 text-center py-6">
    Met minim Mollie non desert Alamo est sit cliquey dolor
    <br />
    do met sent. RELIT official consequent.
  </p>
  <button className="bg-blue-500 px-6 py-3 text-white text-lg font-semibold rounded-md hover:bg-blue-600 transition">
    Try It Free Now
  </button>

  {/* Social Media Icons Section */}
  <div className="flex justify-center space-x-6 mt-6 text-blue-500">
    <FaTwitter size={24} />
    <FaFacebook size={24} />
    <FaInstagram size={24}  />
    <FaLinkedin size={24}  />
  </div>

  
</div>
<div><Footer /></div>
    </div>
  );
}

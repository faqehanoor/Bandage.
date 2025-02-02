import React from 'react';
import Image from 'next/image';
import col from '@/app/col-md-3.png';
import col2 from '@/app/fixed-height (1).png';
import col3 from '@/app/fixed-height (2).png';
import col4 from '@/app/fixed-height (3).png';
import col5 from '@/app/fixed-height (6).png';
import col6 from '@/app/fixed-height (5).png';

export default function Page() {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-3xl font-bold title-font mb-4 text-gray-900">
              Looks What Bandage Provides
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-xl text-gray-600">
              Discover the latest in fashion, comfort, and quality. From winter essentials to summer breeze, we have it all.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
            <div className="group relative">
              <Image
                alt="Winter Essentials"
                className="w-full h-full object-cover object-center transition-transform transform group-hover:scale-105 duration-300"
                src={col2}
                width={500}
                height={500}
              />
              <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-center text-white px-4">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    Winter Essentials
                  </h2>
                  <h1 className="title-font text-xl font-medium text-white mb-3">
                    Cozy sweaters, coats, and scarves for cold weather
                  </h1>
                  <a href="/products" className="bg-indigo-500 text-white py-2 px-4 rounded-full hover:bg-indigo-600 transition duration-200">
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
            <div className="group relative">
              <Image
                alt="Streetwear Vibes"
                className="w-full h-full object-cover object-center transition-transform transform group-hover:scale-105 duration-300"
                src={col3}
                width={500}
                height={500}
              />
              <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-center text-white px-4">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    Streetwear Vibes
                  </h2>
                  <h1 className="title-font text-xl font-medium text-white mb-3">
                    Trendy hoodies, joggers, and sneakers.
                  </h1>
                  <a href="/products" className="bg-indigo-500 text-white py-2 px-4 rounded-full hover:bg-indigo-600 transition duration-200">
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
            <div className="group relative">
              <Image
                alt="Summer Breeze"
                className="w-full h-full object-cover object-center transition-transform transform group-hover:scale-105 duration-300"
                src={col4}
                width={500}
                height={500}
              />
              <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-center text-white px-4">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    Summer Breeze
                  </h2>
                  <h1 className="title-font text-xl font-medium text-white mb-3">
                    Light dresses, shorts, and linen shirts.
                  </h1>
                  <a href="/products" className="bg-indigo-500 text-white py-2 px-4 rounded-full hover:bg-indigo-600 transition duration-200">
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
            <div className="group relative">
              <Image
                alt="Athleisure Wear"
                className="w-full h-full object-cover object-center transition-transform transform group-hover:scale-105 duration-300"
                src={col5}
                width={500}
                height={500}
              />
              <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-center text-white px-4">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    Athleisure Wear
                  </h2>
                  <h1 className="title-font text-xl font-medium text-white mb-3">
                    Yoga pants, sports bras, and running jackets.
                  </h1>
                  <a href="/products" className="bg-indigo-500 text-white py-2 px-4 rounded-full hover:bg-indigo-600 transition duration-200">
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
            <div className="group relative">
              <Image
                alt="Formal Elegance"
                className="w-full h-full object-cover object-center transition-transform transform group-hover:scale-105 duration-300"
                src={col6}
                width={500}
                height={500}
              />
              <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-center text-white px-4">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    Formal Elegance
                  </h2>
                  <h1 className="title-font text-xl font-medium text-white mb-3">
                    Suits, gowns, and blazers for special occasions.
                  </h1>
                  <a href="/products" className="bg-indigo-500 text-white py-2 px-4 rounded-full hover:bg-indigo-600 transition duration-200">
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
            <div className="group relative">
              <Image
                alt="Vintage Chic"
                className="w-full h-full object-cover object-center transition-transform transform group-hover:scale-105 duration-300"
                src={col}
                width={500}
                height={500}
              />
              <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-center text-white px-4">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    Vintage Chic
                  </h2>
                  <h1 className="title-font text-xl font-medium text-white mb-3">
                    Retro-inspired outfits, denim jackets.
                  </h1>
                  <a href="/products" className="bg-indigo-500 text-white py-2 px-4 rounded-full hover:bg-indigo-600 transition duration-200">
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

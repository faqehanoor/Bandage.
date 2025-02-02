import Link from "next/link";
import React from "react";

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 text-white p-8">
      <div className="bg-white shadow-xl rounded-lg p-8 w-full max-w-lg">
        <h1 className="text-5xl font-extrabold text-center text-blue-600 mb-6">
          Thank You!
        </h1>
        <p className="text-xl text-gray-700 mb-6 text-center">
          Your payment was successful. We appreciate your support!
        </p>
        <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
          <p className="text-gray-800">
        Your Order has been Placed Successfully
          </p>
        </div>
        <div className="flex justify-center mt-4">
          <Link href={"/home"}><button className="bg-blue-600 text-white py-2 px-6 rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
            Go to Dashboard
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

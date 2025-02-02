"use client";
import React from "react";
import dynamic from "next/dynamic";

const DynamicComponentWithNoSSR = dynamic(
  () => import('@/app/components/Stripepayment'),
  { ssr: false }
)



const PaymentPage: React.FC = () => {
  const handlePayment = () => {
    // This is where you can integrate your payment gateway (e.g., Stripe, PayPal)
    console.log("Payment Processing...");
    alert("Payment successful! Thank you for your purchase.");
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <h3 className="text-3xl font-bold text-center mb-8">Payment</h3>
      <div className="bg-white p-6 shadow-md rounded-lg max-w-xl mx-auto">
        <h4 className="text-2xl font-semibold text-gray-800 mb-4">
          Complete Your Payment
        </h4>
        <DynamicComponentWithNoSSR />
        
       
     
      </div>
    </div>
  );
};

export default PaymentPage;

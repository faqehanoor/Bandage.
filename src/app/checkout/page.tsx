"use client";

import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation"; // Import useRouter
import { RootState } from "@/app/redux/store";

const CheckoutPage: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart);
  const router = useRouter(); // Initialize router

  const [shippingInfo, setShippingInfo] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    zip: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setShippingInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Order Submitted", shippingInfo);

    // Redirect to another page (e.g., payment page)
    router.push("/payment");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-50 py-8 px-4 flex justify-center items-center">
      <div className="bg-white shadow-lg rounded-lg max-w-md w-full p-6">
        <h3 className="text-3xl font-bold text-center text-blue-600 mb-6">Checkout</h3>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Shipping Info */}
          <div>
            <h4 className="text-xl font-semibold text-gray-800 mb-4">Shipping Information</h4>
            <div className="space-y-3">
              {[
                { label: "Full Name", id: "name", type: "text", value: shippingInfo.name },
                { label: "Email Address", id: "email", type: "email", value: shippingInfo.email },
                { label: "Shipping Address", id: "address", type: "text", value: shippingInfo.address },
                { label: "City", id: "city", type: "text", value: shippingInfo.city },
                { label: "ZIP Code", id: "zip", type: "text", value: shippingInfo.zip },
              ].map((field) => (
                <div key={field.id}>
                  <label htmlFor={field.id} className="block text-sm font-medium text-gray-700">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    id={field.id}
                    name={field.id}
                    value={field.value}
                    onChange={handleInputChange}
                    required
                    className="w-full p-2 border border-gray-300 rounded-md mt-1 focus:ring focus:ring-blue-300"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Cart Summary */}
          <div>
            <h4 className="text-xl font-semibold text-gray-800 mb-4">Cart Summary</h4>
            <div className="bg-gray-100 rounded-lg p-4 space-y-2">
              {cartItems.map((item) => (
                <div key={item.id} className="flex justify-between items-center py-2 border-b last:border-b-0">
                  <span className="font-semibold text-gray-700">{item.title}</span>
                  <span className="text-gray-600">
                    ${item.price.toFixed(2)} x {item.quantity} = ${(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              ))}
              <div className="flex justify-between items-center py-2 mt-4">
                <span className="text-lg font-bold">Total</span>
                <span className="text-2xl font-bold text-blue-600">${totalPrice.toFixed(2)}</span>
              </div>
            </div>
          </div>

          {/* Place Order Button */}
          <div className="text-center">
            <a href="/payment"
              type="submit"
              className="w-full bg-blue-500 text-white text-lg font-semibold py-3 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Place Order
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckoutPage;

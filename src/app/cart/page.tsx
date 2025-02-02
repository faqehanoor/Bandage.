"use client";
import React from "react";
import { remove, updateQuantity } from "@/app/redux/cartslice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";
import Image from "next/image";
import Link from "next/link";

interface CartItem {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
}

const Cartpage: React.FC = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart);

  const handleRemove = (id: number) => {
    dispatch(remove(id));
  };

  const handleQuantityChange = (id: number, type: "increment" | "decrement") => {
    dispatch(updateQuantity({ id, type }));
  };

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-50 py-8 px-4">
      <h3 className="text-2xl font-bold text-center text-blue-600 mb-6">
        Your Cart
      </h3>

      {cartItems.length === 0 ? (
        <div className="flex flex-col items-center justify-center mt-20">
          <h4 className="text-lg font-semibold text-gray-600">
            Your cart is empty!
          </h4>
          
       
        </div>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item: CartItem) => (
            <div
              key={item.id}
              className="flex flex-col md:flex-row items-center bg-white shadow-md rounded-lg p-4"
            >
              <Image
                src={item.image}
                alt={item.title}
                height={100}
                width={100}
                className="rounded-md"
              />

              <div className="md:ml-4 flex-grow text-center md:text-left">
                <h5 className="text-base font-semibold text-gray-800">
                  {item.title}
                </h5>
                <h5 className="text-sm font-medium text-gray-600 mt-2">
                  ${item.price.toFixed(2)} x {item.quantity} = $
                  {(item.price * item.quantity).toFixed(2)}
                </h5>
              </div>

              <div className="flex items-center space-x-1 mt-4 md:mt-0">
                <button
                  aria-label="Decrease quantity"
                  className="bg-gray-200 px-2 py-1 rounded hover:bg-gray-300 transition-colors"
                  onClick={() => handleQuantityChange(item.id, "decrement")}
                  disabled={item.quantity <= 1}
                >
                  -
                </button>
                <span className="px-2 text-sm">{item.quantity}</span>
                <button
                  aria-label="Increase quantity"
                  className="bg-gray-200 px-2 py-1 rounded hover:bg-gray-300 transition-colors"
                  onClick={() => handleQuantityChange(item.id, "increment")}
                >
                  +
                </button>
              </div>

              <button
                aria-label="Remove item"
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition-colors mt-4 md:mt-0 ml-4"
                onClick={() => handleRemove(item.id)}
              >
                Remove
              </button>
            </div>
          ))}

          <div className="bg-white shadow-md rounded-lg p-4 text-right">
            <h4 className="text-lg font-bold text-gray-800">
              Total: ${totalPrice.toFixed(2)}
            </h4>
          </div>

          <div className="flex justify-end">
            <Link
              href="/checkout"
              className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 transition-colors"
            >
              Proceed to Checkout
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cartpage;

"use client";
import React from "react";
import {
  useLogin,
  useLogout,
  useAddToCart,
  useResetCart,
  useUser,
  useCartCount,
  StoreContextProvider,
} from "@/context/store-context";


export default function ContextPage() {
  return (
    <>
      <StoreContextProvider>
        <div className="text-black text-md flex flex-col justify-center items-center text-center w-full h-screen bg-slate-100">
          <div className="border border-black p-10 rounded-md">
            <h1 className="block text-2xl text-black font-black pb-10">
              ContextPage
            </h1>
            <LoginSection />
            <DisplayUser />
            <CartSection />
            <DisplayCart />
          </div>
        </div>
      </StoreContextProvider>
    </>
  );
}

const LoginSection = () => {
  const login = useLogin();
  const logout = useLogout();
  return (
    <>
      <div>
        <h2 className="text-xl font-bold underline px-4 py-2">Login Section</h2>
        <div className="flex flex-col md:flex-row gap-2 justify-center items-center text-center">
          <button
            className="bg-gray-400 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
            onClick={login}
          >
            Login
          </button>
          <button
            className="bg-gray-400 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
            onClick={logout}
          >
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

const CartSection = () => {
  const addToCart = useAddToCart();
  const resetCart = useResetCart();
  return (
    <>
      <div>
        <h2 className="text-xl font-bold underline px-4 py-2">Cart Section</h2>
        <div className="flex flex-col md:flex-row gap-2 justify-center items-center text-center">
          <button
            className="bg-gray-400 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
            onClick={addToCart}
          >
            Add Cart
          </button>
          <button
            className="bg-gray-400 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
            onClick={resetCart}
          >
            Reset Cart
          </button>
        </div>
      </div>
    </>
  );
};

const DisplayCart = () => {
  const cartCount = useCartCount();
  return (
    <div className="bg-gray-200 m-4 text-md px-8 py-2 rounded-md">
      Cart: {cartCount}
    </div>
  );
};

const DisplayUser = () => {
  const user = useUser();
  return (
    <div className="bg-gray-200 m-4 text-md px-8 py-2 rounded-md">
      User: {user}
    </div>
  );
};

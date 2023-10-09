"use client";
import React from "react";
import useStore from "@/zustand/store-zustand";

export default function ZustandPage() {
  return (
    <>
      <div className="text-black text-md flex flex-col justify-center items-center text-center w-full h-screen bg-slate-100">
        <div className="border border-black p-10 rounded-md">
        <h1 className="block text-2xl text-black font-black pb-10">ZustandPage</h1>
        <LoginSection />
        <DisplayUser />
        <CartSection />
        <DisplayCart />
        </div>
      </div>
    </>
  );
}

const LoginSection = () => {
  const login = useStore((state) => state.login);
  const logout = useStore((state) => state.logout);
  return (
    <>
      <div>
        <h2 className="text-xl font-bold underline px-4 py-2" >Login Section</h2>
        <div className="flex flex-col md:flex-row gap-2 justify-center items-center text-center">
        <button className="bg-gray-400 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded" onClick={login}>Login</button>
        <button className="bg-gray-400 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded" onClick={logout}>Logout</button>
        </div>
      </div>
    </>
  );
};

const CartSection = () => {
  const addToCart = useStore((state) => state.addToCart);
  const resetCart = useStore((state) => state.resetCart);
  return (
    <>
      <div>
        <h2 className="text-xl font-bold underline px-4 py-2" >Cart Section</h2>
        <div className="flex flex-col md:flex-row gap-2 justify-center items-center text-center">
        <button className="bg-gray-400 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded" onClick={addToCart} >Add Cart</button>
        <button className="bg-gray-400 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded" onClick={resetCart} >Reset Cart</button>
        </div>
      </div>
    </>
  );
};

const DisplayCart = () => {
  const cartCount = useStore((state) => state.cartCount);
  return <div className="bg-gray-200 m-4 text-md px-8 py-2 rounded-md">Cart: {cartCount}</div>;
};

const DisplayUser = () => {
  const user = useStore((state) => state.user);
  return <div className="bg-gray-200 m-4 text-md px-8 py-2 rounded-md">User: {user}</div>;
};

import React from "react";

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
  return (
    <>
      <div>
        <h2 className="text-xl font-bold underline px-4 py-2" >Login Section</h2>
        <div className="flex flex-col md:flex-row gap-2">
        <button className="bg-gray-400 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded">Login</button>
        <button className="bg-gray-400 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded">Logout</button>
        </div>
      </div>
    </>
  );
};

const CartSection = () => {
  return (
    <>
      <div>
        <h2 className="text-xl font-bold underline px-4 py-2" >Cart Section</h2>
        <div className="flex flex-col md:flex-row gap-2">
        <button className="bg-gray-400 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded">Add Cart</button>
        <button className="bg-gray-400 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded">Remove Cart</button>
        </div>
      </div>
    </>
  );
};

const DisplayCart = () => {
  return <div className="bg-gray-200 m-4 text-md px-8 py-2 rounded-md">Cart: </div>;
};

const DisplayUser = () => {
  return <div className="bg-gray-200 m-4 text-md px-8 py-2 rounded-md">User: </div>;
};

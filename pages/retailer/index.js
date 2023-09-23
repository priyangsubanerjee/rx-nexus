/* eslint-disable @next/next/no-img-element */
import Navbar from "@/components/Navbar";
import React from "react";

function Login() {
  return (
    <main className="h-screen overflow-auto bg-slate-50">
      <Navbar />
      <div className="pt-20">
        <div className="border border-slate-200 px-5 pt-5 pb-10 mx-auto max-w-[500px] rounded bg-white">
          <div className="flex items-center justify-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/11449/11449943.png"
              alt=""
              className="w-32"
            />
          </div>
          <div className="flex flex-col items-center justify-center mt-10">
            <h1 className="text-2xl font-semibold text-neutral-800">
              Login to your account
            </h1>
            <p className="text-sm mt-2 text-neutral-500">
              Please use valid credentials only
            </p>
          </div>
          <form action="" className="mt-7 px-5">
            <div>
              <label htmlFor="email" className="text-sm text-neutral-600">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                id="email"
                className="w-full border border-neutral-200 rounded-sm px-3 h-10 mt-1 focus:outline-none focus:border-neutral-500"
              />
            </div>
            <div className="mt-4">
              <label htmlFor="email" className="text-sm text-neutral-600">
                Password
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your password"
                className="w-full border border-neutral-200 rounded-sm px-3 h-10 mt-1 focus:outline-none focus:border-neutral-500"
              />
            </div>
            <div className="mt-7">
              <button className="bg-blue-500 text-white w-full h-12 rounded">
                Submit
              </button>
            </div>
            <div className="mt-7 flex items-center justify-center">
              <button className="text-neutral-500 text-sm hover:underline">
                Recover account
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}

export default Login;

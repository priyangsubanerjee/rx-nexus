/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <nav className="h-20 bg-white flex items-center justify-between px-8 border-b border-slate-200">
      <span className="font-major-mono text-3xl">Rx Nexus</span>
      <ul className="flex items-center space-x-16 font-normal text-base text-slate-800">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
        <li>
          <a href="#">Blog</a>
        </li>
      </ul>
      <div className="flex items-center">
        <img
          src="https://static.toiimg.com/thumb/msid-103068370,width-1280,height-720,resizemode-4/.jpg"
          alt=""
          className="h-12"
        />
        <img
          src="https://kiit.ac.in/wp-content/uploads/2022/10/KIIT-logo-HD.png"
          alt=""
          className="h-12 ml-6"
        />
      </div>
    </nav>
  );
}

export default Navbar;

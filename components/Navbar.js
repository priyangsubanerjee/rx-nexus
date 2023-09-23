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
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
        <li>
          <a href="#">Blog</a>
        </li>
      </ul>
      <div>
        <button className="bg-slate-100 text-slate-700 text-base h-12 px-5 rounded">
          Raise an issue
        </button>
      </div>
    </nav>
  );
}

export default Navbar;

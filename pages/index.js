/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import Faq from "react-faq-component";
import FAQ from "@/components/FAQ";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="h-screen overflow-auto bg-slate-50">
      <Navbar />
      <div className="p-16 grid grid-cols-4 gap-6">
        <div className="h-56 bg-white border rounded-md flex items-center justify-center relative group overflow-hidden">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Ministry_of_Health_India.svg/1200px-Ministry_of_Health_India.svg.png"
            alt=""
            className="w-[80%]"
          />
          <div className="opacity-0 group-hover:opacity-100 absolute inset-0 h-full w-full bg-gradient-to-b from-white/50 to-white flex items-end justify-center p-5 transition-all">
            <Link href="/mohfw">
              <button className="h-8 px-5 bg-neutral-700 hover:bg-neutral-900 text-white text-sm rounded-sm">
                Visit portal
              </button>
            </Link>
          </div>
        </div>
        <div className="h-56 bg-white border rounded-md flex flex-col items-center justify-center relative group overflow-hidden">
          <img
            src="https://seeklogo.com/images/M/medicine-symbol-logo-C5F32D7618-seeklogo.com.png"
            alt=""
            className="w-[80%] max-h-[40%] h-auto object-contain"
          />
          <span className="mt-5 text-xl font-semibold text-neutral-700">
            Pharma <span className="font-light">Portal</span>
          </span>
          <span className="text-xs mt-2 text-neutral-500">
            1000+ pharma companies
          </span>
          <div className="opacity-0 group-hover:opacity-100 absolute inset-0 h-full w-full bg-gradient-to-b from-white/50 to-white flex items-end justify-center p-5 transition-all">
            <Link href="/pharma">
              <button className="h-8 px-5 bg-neutral-700 hover:bg-neutral-900 text-white text-sm rounded-sm">
                Visit portal
              </button>
            </Link>
          </div>
        </div>
        <div className="h-56 bg-white border rounded-md flex flex-col items-center justify-center relative group overflow-hidden">
          <img
            src="https://cdn-icons-png.flaticon.com/512/10382/10382450.png"
            alt=""
            className="w-[80%] max-h-[40%] h-auto object-contain"
          />
          <span className="mt-5 text-xl font-semibold text-neutral-700">
            Distributer <span className="font-light">Portal</span>
          </span>
          <span className="text-xs mt-2 text-neutral-500">
            1000+ distributers
          </span>
          <div className="opacity-0 group-hover:opacity-100 absolute inset-0 h-full w-full bg-gradient-to-b from-white/50 to-white flex items-end justify-center p-5 transition-all">
            <Link href="/distributer">
              <button className="h-8 px-5 bg-neutral-700 hover:bg-neutral-900 text-white text-sm rounded-sm">
                Visit portal
              </button>
            </Link>
          </div>
        </div>
        <div className="h-56 bg-white border rounded-md flex flex-col items-center justify-center relative group overflow-hidden">
          <img
            src="https://cdn-icons-png.flaticon.com/512/11449/11449943.png"
            alt=""
            className="w-[80%] max-h-[40%] h-auto object-contain"
          />
          <span className="mt-5 text-xl font-semibold text-neutral-700">
            Retailer <span className="font-light">Portal</span>
          </span>
          <span className="text-xs mt-2 text-neutral-500">1000+ shops</span>
          <div className="opacity-0 group-hover:opacity-100 absolute inset-0 h-full w-full bg-gradient-to-b from-white/50 to-white flex items-end justify-center p-5 transition-all">
            <Link href="/retailer">
              <button className="h-8 px-5 bg-neutral-700 hover:bg-neutral-900 text-white text-sm rounded-sm">
                Visit portal
              </button>
            </Link>
          </div>
        </div>
        <div className="h-56 bg-white border rounded-md flex flex-col items-center justify-center relative group overflow-hidden">
          <img
            src="https://cdn-icons-png.flaticon.com/512/4187/4187198.png"
            alt=""
            className="w-[80%] max-h-[40%] h-auto object-contain"
          />
          <span className="mt-5 text-xl font-semibold text-neutral-700">
            Consumer <span className="font-light">Portal</span>
          </span>
          <span className="text-xs mt-2 text-neutral-500">1000+ shops</span>
          <div className="opacity-0 group-hover:opacity-100 absolute inset-0 h-full w-full bg-gradient-to-b from-white/50 to-white flex items-end justify-center p-5 transition-all">
            <Link href="/consumer">
              <button className="h-8 px-5 bg-neutral-700 hover:bg-neutral-900 text-white text-sm rounded-sm">
                Visit portal
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="p-16">
        <h1 className="text-2xl font-semibold text-neutral-800">
          Frequently Asked Questions
        </h1>
        <p className="text-xs text-slate-600 mt-2">
          We strive to make our platform as easy to use as possible. If you have
          any questions, please contact us at here.
        </p>
        <div className="mt-5">
          <FAQ />
        </div>
      </div>
    </main>
  );
}

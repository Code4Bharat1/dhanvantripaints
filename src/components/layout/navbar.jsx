"use client";

import { ChevronDown, Menu, X } from "lucide-react"; // Using Lucide icons
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Get active route
import { useState } from "react";

const Navbar = () => {
  const [ShowDropdown, setShowDropdown] = useState(false);
  const [ShowServices, setShowServices] = useState(false);
  const pathname = usePathname(); // Get current route

  return (
    <nav className="w-full bg-white shadow-md relative">
      <div className=" flex justify-between items-center py-4">
        {/* Logo */}
        <div className="flex items-center">
          <Image src="/images/logo.png" alt="Dhanvantri Paints Logo" width={250} height={250} />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-lg font-medium text-gray-800">
          <li className={pathname === "/" ? "text-green-600 font-semibold" : "hover:text-gray-500"}>
            <Link href="/">Home</Link></li>
          <li className={pathname === "/about" ? "text-green-600 font-semibold" : "hover:text-gray-500"}>
            <Link href="/about">About</Link></li>

          <li className="relative cursor-pointer">
            <div
              className={`flex items-center ${pathname.includes("/services") ? "text-green-600 font-semibold" : "hover:text-gray-500"}`}
              onClick={() => setShowServices(!ShowServices)}
            >
              <li><Link href="/services">Services</Link></li>
              <ChevronDown size={18} className="text-black ml-1 transition transform"
                style={{ transform: ShowServices ? "rotate(180deg)" : "rotate(0deg)" }}
              />
            </div>

            {ShowServices && (
              <ul className="text-center absolute left-0 mt-2 w-56 bg-white shadow-md rounded-lg py-1 z-50 border border-white">
                <li className="text-[15px] text-black px-1 py-1 hover:bg-gray-100">
                  <Link href="/internal">Internal Painting</Link>
                </li>
                <li className="text-[15px] text-black px-1 py-1 hover:bg-gray-100">
                  <hr className="border-gray-400 w-48 mx-auto" />

                  <Link href="/external">External Painting</Link></li>
                <li className="text-[15px] text-black px-1 py-1 hover:bg-gray-100">
                  <hr className="border-gray-400 w-48 mx-auto" />
                  <Link href="/waterproof">Waterproof Painting</Link></li>
                <li className="text-[15px] text-black px-1 py-1 hover:bg-gray-100">
                  <hr className="border-gray-400 w-48 mx-auto" />
                  <Link href="/repairpainting">Repair Painting</Link></li>
                <li className="text-[15px] text-black px-1 py-1 hover:bg-gray-100">
                  <hr className="border-gray-400 w-48 mx-auto" />
                  <Link href="/society">Society & Commercial painting</Link></li>
              </ul>
            )}

          </li>
          <li className={pathname === "/internal" ? "text-green-600 font-semibold" : "hover:text-gray-500"}>
            <Link href="/gallery">Gallery</Link></li>

          <li className={pathname === "/external" ? "text-green-600 font-semibold" : "hover:text-gray-500"}>
            <Link href="/testimonial">Testimonial</Link></li>

          <li className={pathname === "/contact" ? "text-green-600 font-semibold" : "hover:text-gray-500"}>
            <Link href="/contact">Contact Us</Link></li>
        </ul>

        {/* Button */}
        <div className="md:px-2">
          <button className="hidden md:block w-[250px] bg-orange-400 text-white py-2 md:px-2 rounded-full font-medium hover:bg-orange-500">
            Book a free visit
          </button>

        </div>
        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setShowDropdown(!ShowDropdown)}
        >
          {ShowDropdown ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {ShowDropdown && (
        <div className="md:hidden bg-white absolute top-16 w-full shadow-lg z-50 px-4">
          <ul className="flex flex-col space-y-4 text-lg font-medium text-gray-800 text-left py-4">
            <li className={pathname === "/" ? "text-green-600 font-semibold" : "hover:text-gray-500"}>
              <Link href="/">Home</Link></li>
            <li className={pathname === "/about" ? "text-green-600 font-semibold" : "hover:text-gray-500"}>
              <Link href="/about">About</Link></li>

            <li className={`flex items-center ${pathname === "/services" ? "text-green-600 font-semibold" : "hover:text-gray-500"}`}>

              <Link href="/services" className=" block">Services</Link>


              <ChevronDown
                size={18}
                className="ml-1 translate-y-[2px] transition-transform cursor-pointer"
                style={{ transform: ShowServices ? "rotate(180deg)" : "rotate(0deg)" }}
                onClick={(e) => {
                  e.preventDefault(); // Prevents the parent Link from triggering
                  setShowServices(!ShowServices);
                }}
              />
            </li>
            {ShowServices && (
              <ul className="bg-gray-100 rounded-lg py-2 mt-2 z-50">
                <li className="text-sm px-4 py-2 hover:bg-gray-200"><Link href="/internal">Internal Painting</Link></li>
                <li className="text-sm px-4 py-2 hover:bg-gray-200"><Link href="/external">External Painting</Link></li>
                <li className="text-sm px-4 py-2 hover:bg-gray-200"><Link href="/waterproof">Waterproof painting</Link></li>
                <li className="text-sm px-4 py-2 hover:bg-gray-200"><Link href="/repairpainting">Repair Painting</Link></li>
                <li className="text-sm px-4 py-2 hover:bg-gray-200"><Link href="/society">Society & Commercial Painting</Link></li>
              </ul>
            )}

            <li className={pathname === "/gallery" ? "text-green-600 font-semibold" : "hover:text-gray-500"}>
              <Link href="/gallery">Gallery</Link></li>
            <li className={pathname === "/testimonial" ? "text-green-600 font-semibold" : "hover:text-gray-500"}>
              <Link href="/testimonial">Testimonial</Link></li>
            <li className={pathname === "/contact" ? "text-green-600 font-semibold" : "hover:text-gray-500"}>
              <Link href="/contact">Contact Us</Link></li>
            <li>
              <button className="bg-orange-400 text-white py-2 px-6 rounded-lg font-medium w-full">
                Book a free visit
              </button>
            </li>
          </ul>
        </div>
      )
      }
    </nav >
  );
};

export default Navbar;


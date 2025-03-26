"use client";

import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Navbar = () => {
  const [ShowDropdown, setShowDropdown] = useState(false);
  const [ShowServices, setShowServices] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="w-full bg-white shadow-md relative">
      <div className="flex justify-between items-center py-4 px-4 md:px-8">
        {/* Logo */}
        <div>
          <Image src="/images/logo.png" alt="Dhanvantri Paints Logo" width={250} height={250} />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-lg font-medium text-gray-800">
          <li className={pathname === "/" ? "text-green-600 font-semibold" : "hover:text-gray-500"}>
            <Link href="/">Home</Link>
          </li>
          <li className={pathname === "/about" ? "text-green-600 font-semibold" : "hover:text-gray-500"}>
            <Link href="/about">About</Link>
          </li>

          {/* Services Dropdown */}
          <li className="relative">
            <Link href="/services">
            <button
              className={`flex items-center ${pathname.includes("/services") ? "text-green-600 font-semibold" : "hover:text-gray-500"}`}
              onClick={() => setShowServices(!ShowServices)}
            >
              Services <ChevronDown size={18} className={`ml-1 transition-transform ${ShowServices ? "rotate-180" : ""}`} />
            </button></Link>

            {ShowServices && (
              <ul className="absolute left-0 mt-2 w-56 bg-white shadow-md rounded-lg py-2 z-50 border border-gray-200">
                {[
                  { href: "/internal", text: "Internal Painting" },
                  { href: "/external", text: "External Painting" },
                  { href: "/waterproof", text: "Waterproof Painting" },
                  { href: "/repairpainting", text: "Repair Painting" },
                  { href: "/society", text: "Society & Commercial Painting" }
                ].map(({ href, text }) => (
                  <li key={href} className="text-[15px] text-black px-4 py-2 hover:bg-gray-100">
                    <Link href={href}>{text}</Link>
                  </li>
                ))}
              </ul>
            )}
          </li>

          <li className={pathname === "/gallery" ? "text-green-600 font-semibold" : "hover:text-gray-500"}>
            <Link href="/gallery">Gallery</Link>
          </li>
          <li className={pathname === "/testimonial" ? "text-green-600 font-semibold" : "hover:text-gray-500"}>
            <Link href="/testimonial">Testimonial</Link>
          </li>
          <li className={pathname === "/contact" ? "text-green-600 font-semibold" : "hover:text-gray-500"}>
            <Link href="/contact">Contact Us</Link>
          </li>
        </ul>

        {/* Book a Free Visit Button */}
        <div className="hidden md:block">
        <Link
            href="https://wa.me/9167055515"
            target="_blank"
            rel="noopener noreferrer"><button className="w-[250px] bg-orange-400 text-white py-2 px-4 rounded-full font-medium hover:bg-orange-500">
            Book a free visit
          </button></Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden focus:outline-none" onClick={() => setShowDropdown(!ShowDropdown)}>
          {ShowDropdown ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {ShowDropdown && (
        <div className="md:hidden bg-white absolute top-16 w-full shadow-lg z-50 px-4">
          <ul className="flex flex-col space-y-4 text-lg font-medium text-gray-800 text-left py-4">
            <li className={pathname === "/" ? "text-green-600 font-semibold" : "hover:text-gray-500"}>
              <Link href="/">Home</Link>
            </li>
            <li className={pathname === "/about" ? "text-green-600 font-semibold" : "hover:text-gray-500"}>
              <Link href="/about">About</Link>
            </li>

            {/* Services Dropdown */}
            <li className="flex items-center cursor-pointer" onClick={() => setShowServices(!ShowServices)}>
              <Link href="/services"><span className={pathname.includes("/services") ? "text-green-600 font-semibold" : "hover:text-gray-500"}>Services</span>
              </Link><ChevronDown size={18} className={`ml-1 transition-transform ${ShowServices ? "rotate-180" : ""}`} />
            </li>

            {ShowServices && (
              <ul className="bg-gray-100 rounded-lg py-2">
                {[
                  { href: "/internal", text: "Internal Painting" },
                  { href: "/external", text: "External Painting" },
                  { href: "/waterproof", text: "Waterproof Painting" },
                  { href: "/repairpainting", text: "Repair Painting" },
                  { href: "/society", text: "Society & Commercial Painting" }
                ].map(({ href, text }) => (
                  <li key={href} className="text-sm px-4 py-2 hover:bg-gray-200">
                    <Link href={href}>{text}</Link>
                  </li>
                ))}
              </ul>
            )}

            <li className={pathname === "/gallery" ? "text-green-600 font-semibold" : "hover:text-gray-500"}>
              <Link href="/gallery">Gallery</Link>
            </li>
            <li className={pathname === "/testimonial" ? "text-green-600 font-semibold" : "hover:text-gray-500"}>
              <Link href="/testimonial">Testimonial</Link>
            </li>
            <li className={pathname === "/contact" ? "text-green-600 font-semibold" : "hover:text-gray-500"}>
              <Link href="/contact">Contact Us</Link>
            </li>

            {/* Book a Free Visit Button */}
            <li>
            <Link
            href="https://wa.me/9167055515"
            target="_blank"
            rel="noopener noreferrer"><button className="w-full bg-orange-400 text-white py-2 rounded-lg font-medium hover:bg-orange-500">
            Book a free visit
          </button></Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

"use client";
import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaPinterest, FaYoutube, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#5a4cbb] text-white py-15 md:py-5">
      <div className="container mx-auto md:px-15 px-6 md:mt-10">
        {/* Top White Line */}
        <div className="border-t border-white mb-6"></div>

        <div className="grid grid-cols-1 md:grid-cols-4 text-left">
          {/* Logo Section */}
          <div className="flex flex-col items-center md:items-start mt-1 md:py-20 mb-7">
            <Image src="/images/footer.png" alt="Dhanvantri Paints Logo" width={200} height={150} />
          </div>

          {/* Services Section */}
          <div className="text-left w-74 mb-5 md:mt-3">
            <h3 className="text-lg font-semibold mb-2">Services</h3>
            <ul className="space-y-2">
              <li><Link className="text-sm font-extralight" href="/internal">Interior painting</Link></li>
              <li><Link className="text-sm font-extralight" href="/external">Exterior painting</Link></li>
              <li><Link className="text-sm font-extralight" href="/waterproof">Water proofing</Link></li>
              <li><Link className="text-sm font-extralight" href="/repairpainting">Repair painting</Link></li>
              <li><Link className="text-sm font-extralight" href="/society">Society and Commercial building painting</Link></li>
            </ul>
          </div>

          {/* Contact Us Section */}
          <div className="text-left md:space-x-5 md:items-right md:mt-3 mb-5 md:pl-12">
            <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
            <ul className="text-left space-y-2">
              <li className="text-left flex items-center space-x-2">
                <FaPhoneAlt className="text-sm mb-1" />
                <span className="text-sm mb-1 font-extralight">+9167055515</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaEnvelope className="text-sm mb-1" />
                <span className="text-sm mb-1 font-extralight">dhanvantripaints@gmail.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaMapMarkerAlt className="text-[17px] flex-shrink-0 mb-1" />
                <span className="text-[13px] font-extralight w-64 md:w-[450px] leading-6 ">SS Classes Nr Ganesh Mandir,
                  church road, Manpada Thane West 400607
                </span>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="flex flex-col md:items-end md:text-right">
            <h3 className="text-lg max-w-5xl font-semibold mb-3">Social Media</h3>
            <div className="flex space-x-3 text-lg md:px-1">
              <a href="#" className="hover:text-gray-300">
                <FaInstagram />
              </a>
              <a href="#" className="hover:text-gray-300">
                <FaPinterest />
              </a>
              <a href="#" className="hover:text-gray-300">
                <FaYoutube />
              </a>
              <a href="#" className="hover:text-gray-300">
                <FaXTwitter />

              </a>
            </div>
          </div>
        </div>

        {/* Bottom White Line */}
        <div className="border-t border-white mt-9 md:mb-4 mb-5"></div>

        {/* Footer Bottom Text */}
        <div className="text-center text-sm md:mb-3">
          copyright C4B@2023 all right reserved
        </div>
      </div>
    </footer>
  );
};
export default Footer;
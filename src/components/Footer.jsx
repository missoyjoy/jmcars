import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="bg-black text-[#D4AF37] mt-10">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between gap-8">

        {/* Left Section: Contact Info & Open Hours */}
           <div className="flex flex-col gap-2">
          <h2 className="font-semibold text-lg">Contact Us</h2>
          <span className="text-gray-400 text-sm">Mon - Sat: 8:00 AM - 6:00 PM</span>
          <a href="tel:+254700000000" className="text-gray-400 text-sm hover:text-white transition duration-200">
            Phone: +254 700 000 000
          </a>
          <a href="mailto:info@jmmotors.com" className="text-gray-400 text-sm hover:text-white transition duration-200">
            Email: info@jmmotors.com
          </a>
          <span className="text-gray-400 text-sm">Location: Nairobi, Kenya</span>
        </div>
        {/* Center Section: Gallery & Catalogue */}
        <div className="flex flex-col gap-2">
          <h2 className="font-semibold text-lg">Explore</h2>
          <a href="#gallery" className="hover:text-white transition duration-200">Gallery yard</a>
          <a 
            href="/catalogue.pdf" 
            download 
            className="hover:text-white transition duration-200"
          >
            Download Catalogue
          </a>
        </div>

        {/* Right Section: Social Media */}
        <div className="flex flex-col gap-2">
          <h2 className="font-semibold text-lg">Follow Us</h2>
          <div className="flex gap-4 mt-2 text-xl">
            <a href="#" className="hover:text-white transition duration-200"><FaFacebookF /></a>
            <a href="#" className="hover:text-white transition duration-200"><FaInstagram /></a>
            <a href="#" className="hover:text-white transition duration-200"><FaTwitter /></a>
            <a href="#" className="hover:text-white transition duration-200"><SiTiktok /></a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-gray-500 text-sm mt-6">
        &copy; {new Date().getFullYear()} JM Motors. All rights reserved.
      </div>
    </footer>
  );
}


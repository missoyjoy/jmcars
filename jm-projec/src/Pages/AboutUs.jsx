
import React from "react";

import { FaBullseye, FaEye, FaHandshake, FaHeart, FaLightbulb, FaUsers } from "react-icons/fa";
import logo from "../assets/logo.png"; // Make sure you have an image

export default function AboutUs() {
  return (
    <div className="bg-black text-[#D4AF37]">
      {/* About Intro */}
<div className="max-w-7xl mx-auto px-6 py-16 text-center">
  <img 
    src={logo} 
    alt="JM Motors Logo" 
    className="w-32 mx-auto mb-6 rounded-full shadow-lg"
  />
  <h1 className="text-4xl font-bold mb-4">About JM Motors</h1>
  <p className="text-gray-400 max-w-2xl mx-auto">
    At <span className="text-[#D4AF37] font-semibold">JM Motors</span>, we believe a car is more than just a machine — 
    it’s a reflection of dreams, ambition, and lifestyle. 
    Since our humble beginnings, we’ve built our reputation on trust, 
    quality service, and lasting relationships with our valued customers.
  </p>
</div>


      {/* Mission & Vision */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12">
        {/* Mission */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <FaBullseye size={48} className="mb-4" />
          <h2 className="text-3xl font-semibold mb-2">Our Mission</h2>
          <p className="text-gray-400">
            To provide high-quality vehicles with unmatched service and integrity, ensuring our customers drive their dreams.
          </p>
        </div>

        {/* Vision */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <FaEye size={48} className="mb-4" />
          <h2 className="text-3xl font-semibold mb-2">Our Vision</h2>
          <p className="text-gray-400">
            To be the most trusted car dealer in Kenya, known for innovation, excellence, and customer satisfaction.
          </p>
        </div>
      </div>

      {/* Core Values */}
      <div className="bg-gray-900 py-16">
        <h2 className="text-3xl font-semibold text-center mb-12">Our Core Values</h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-6">
          <div className="flex flex-col items-center text-center">
            <FaHandshake size={40} className="mb-4" />
            <h3 className="text-xl font-semibold mb-1">Integrity</h3>
            <p className="text-gray-400">We conduct business with honesty and transparency.</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <FaHeart size={40} className="mb-4" />
            <h3 className="text-xl font-semibold mb-1">Passion</h3>
            <p className="text-gray-400">We are passionate about delivering the best experience.</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <FaLightbulb size={40} className="mb-4" />
            <h3 className="text-xl font-semibold mb-1">Innovation</h3>
            <p className="text-gray-400">We constantly seek creative solutions to serve our clients.</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <FaUsers size={40} className="mb-4" />
            <h3 className="text-xl font-semibold mb-1">Teamwork</h3>
            <p className="text-gray-400">We work together to achieve our vision and goals.</p>
          </div>
        </div>
      </div>

      {/* History */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div>
          <h2 className="text-3xl font-semibold mb-4">Our History</h2>
          <p className="text-gray-400 mb-4">
            JM Motors started as a small family business and has grown into one of the most trusted car dealers in Kenya.
          </p>
          <p className="text-gray-400">
            Over the years, we have expanded our services to include car sales, car hire, and comprehensive maintenance, building lasting relationships with our customers.
          </p>
        </div>

        {/* Image */}
        <div>
          <img
            src={logo}
            alt="Company History"
            className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>

    </div>
  );
}
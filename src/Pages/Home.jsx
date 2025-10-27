import React, { useState } from "react"; // ✅ useState added
import RangeRover from "../assets/RangeRover.jpg";
import MBenz from "../assets/MBenz.jpg";
import Land1 from "../assets/Land1.jpg";
import toyota from "../assets/toyota.jpg";
import BMW from "../assets/BMW.jpg";
import Benz from "../assets/Benz.jpg";
import Lambo from "../assets/Lambo.jpg";
import Ford from "../assets/Ford.jpg";
import Volk from "../assets/Volk.jpg";

export default function Home() {
  const [selectedImage, setSelectedImage] = useState(null); // ✅ state works now

  const cars = [
    {
      img: RangeRover,
      title: "RangeRover Collection",
      desc: "Rugged power and family comfort — explore our RangeRovers.",
    },
    {
      img: MBenz,
      title: "Luxury Car",
      desc: "Elegant design and premium comfort in every ride.",
    },
    {
      img: Land1,
      title: "Trucks & Pickups",
      desc: "Built for strength and reliability on every terrain.",
    },
  ];

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  return (
    <div className="bg-black text-[#D4AF37] min-h-screen flex flex-col items-center">
      {/* Section 1: Welcome */}
      <div className="text-center my-16 px-4">
        <h1 className="text-4xl md:text-6xl font-bold tracking-wide">
          DRIVE YOUR DREAMS
        </h1>
        <p className="text-gray-400 mt-4 text-lg">
          Find your next ride — power, class, and comfort all in one place.
        </p>
      </div>

      {/* Section 2: Cars */}
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8 px-6 my-10">
        {cars.map((car, index) => (
          <div
            key={index}
            className="bg-[#111] rounded-2xl shadow-lg p-4 hover:scale-105 transition-transform cursor-pointer"
            onClick={() => handleImageClick(car.img)} // ✅ works now
          >
            <img
              src={car.img}
              alt={car.title}
              className="w-full h-52 object-cover rounded-xl"
            />
            <h3 className="text-xl font-semibold mt-4">{car.title}</h3>
            <p className="text-gray-400 text-sm mt-2">{car.desc}</p>
          </div>
        ))}
      </div>

      {/* Section 3: Explore Button */}
      <div className="my-10">
        <a
          href="/cars-for-sale"
          className="bg-[#D4AF37] text-black font-semibold px-8 py-3 rounded-full shadow-md hover:bg-[#b7952c] transition-all"
        >
          Explore Our Yard
        </a>
      </div>

      {/* Section 4: Partners */}
      <div className="w-full max-w-6xl my-10 text-center px-4">
        <h2 className="text-2xl font-semibold mb-6">Our Partners</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 place-items-center">
          <img src={toyota} alt="Toyota" className="h-12 object-contain" />
          <img src={BMW} alt="BMW" className="h-12 object-contain" />
          <img src={Benz} alt="Mercedes" className="h-12 object-contain" />
          <img src={Lambo} alt="Lamborghini" className="h-12 object-contain" />
          <img src={Ford} alt="Ford" className="h-12 object-contain" />
          <img src={Volk} alt="Volkswagen" className="h-12 object-contain" />
        </div>
      </div>

      {/* ✨ Popup Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={handleClose}
        >
          <img
            src={selectedImage}
            alt="Car"
            className="max-w-4xl w-[90%] rounded-2xl shadow-2xl object-contain border-4 border-[#D4AF37]"
          />
        </div>
      )}
    </div>
  );
}



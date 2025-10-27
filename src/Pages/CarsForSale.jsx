

import React, { useState } from "react";
import RangeRover from "../assets/RangeRover.jpg";
import MBenz from "../assets/MBenz.jpg";
import Land1 from "../assets/Land1.jpg";
import Ford1 from "../assets/Ford1.jpg";
import KCB from "../assets/KCB.jpg";
import Equity from "../assets/Equity.jpg";
import Absa from "../assets/Absa.jpg";
import Coop from "../assets/Coop.jpg";

export default function CarsForSale() {
  const cars = [
    {
      img: RangeRover,
      name: "Range Rover Sport",
      color: "Black",
      fuel: "Diesel",
      price: "$200/day",
      status: "Available",
    },
    {
      img: MBenz,
      name: "Mercedes Benz C-Class",
      color: "Silver",
      fuel: "Petrol",
      price: "$180/day",
      status: "Sold",
    },
    {
      img: Land1,
      name: "Toyota Land Cruiser",
      color: "White",
      fuel: "Diesel",
      price: "$250/day",
      status: "Available",
    },
    {
      img: Ford1,
      name: "Ford Ranger",
      color: "Blue",
      fuel: "Diesel",
      price: "$150/day",
      status: "Available",
    },
  {
      img: RangeRover,
      name: "Range Rover Sport",
      color: "Black",
      fuel: "Diesel",
      price: "$200/day",
      status: "Available",
    },
    {
      img: MBenz,
      name: "Mercedes Benz C-Class",
      color: "Silver",
      fuel: "Petrol",
      price: "$180/day",
      status: "Sold",
    },
    {
      img: Land1,
      name: "Toyota Land Cruiser",
      color: "White",
      fuel: "Diesel",
      price: "$250/day",
      status: "Available",
    },
    {
      img: Ford1,
      name: "Ford Ranger",
      color: "Blue",
      fuel: "Diesel",
      price: "$150/day",
      status: "Available",
    },
     {
      img: RangeRover,
      name: "Range Rover Sport",
      color: "Black",
      fuel: "Diesel",
      price: "$200/day",
      status: "Available",
    },
    {
      img: MBenz,
      name: "Mercedes Benz C-Class",
      color: "Silver",
      fuel: "Petrol",
      price: "$180/day",
      status: "Sold",
    },
    {
      img: Land1,
      name: "Toyota Land Cruiser",
      color: "White",
      fuel: "Diesel",
      price: "$250/day",
      status: "Available",
    },
    {
      img: Ford1,
      name: "Ford Ranger",
      color: "Blue",
      fuel: "Diesel",
      price: "$150/day",
      status: "Available",
    }, 
  ];

  const banks = [
    { img: KCB, name: "KCB Bank" },
    { img: Equity, name: "Equity Bank" },
    { img: Absa, name: "ABSA Bank" },
    { img: Coop, name: "Co-operative Bank" },
  ];

  const [search, setSearch] = useState("");

  return (
    <div className="bg-black text-[#D4AF37] min-h-screen flex flex-col items-center py-10">
      {/* 1️⃣ Welcome Section */}
      <div className="text-center mb-12 px-4">
        <h1 className="text-4xl md:text-6xl font-bold">Cars For Sale</h1>
        <p className="text-gray-400 mt-3 text-lg">
          Hire your dream car — luxury, comfort, and performance for any occasion.
        </p>
      </div>

      {/* 2️⃣ Cars Display Section */}
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6 mb-16">
        {cars.map((car, index) => (
          <div
            key={index}
            className="bg-[#111] rounded-2xl shadow-lg p-4 hover:scale-105 transition-transform"
          >
            <img
              src={car.img}
              alt={car.name}
              className="w-full h-52 object-cover rounded-xl"
            />
            <h3 className="text-xl font-semibold mt-4">{car.name}</h3>
            <p className="text-gray-400 text-sm mt-1">Color: {car.color}</p>
            <p className="text-gray-400 text-sm">Fuel Type: {car.fuel}</p>
            <p className="text-gray-400 text-sm">Price: {car.price}</p>
            <p
              className={`text-sm mt-1 ${
                car.status === "Available" ? "text-green-400" : "text-red-400"
              }`}
            >
              Status: {car.status}
            </p>
          </div>
        ))}
      </div>

      {/* 3️⃣ Search Section */}
      <div className="w-full max-w-4xl mb-16 bg-[#111] rounded-2xl p-6 shadow-lg">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Search for a Car
        </h2>
        <form className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            type="text"
            placeholder="Brand Type"
            className="p-3 rounded-xl bg-black border border-[#D4AF37] text-white"
          />
          <input
            type="text"
            placeholder="Make"
            className="p-3 rounded-xl bg-black border border-[#D4AF37] text-white"
          />
          <input
            type="text"
            placeholder="Model"
            className="p-3 rounded-xl bg-black border border-[#D4AF37] text-white"
          />
          <input
            type="number"
            placeholder="Year"
            className="p-3 rounded-xl bg-black border border-[#D4AF37] text-white"
          />
          <select className="p-3 rounded-xl bg-black border border-[#D4AF37] text-white">
            <option>Status</option>
            <option>Available</option>
            <option>Sold</option>
          </select>
          <input
            type="text"
            placeholder="Price Range"
            className="p-3 rounded-xl bg-black border border-[#D4AF37] text-white"
          />
        </form>
        <button className="mt-6 bg-[#D4AF37] text-black font-semibold px-8 py-3 rounded-full shadow-md hover:bg-[#b7952c] transition-all w-full md:w-auto block mx-auto">
          Search
        </button>
      </div>

      {/* 4️⃣ Financial Partners Section */}
      <div className="w-full max-w-6xl text-center px-4 mb-10">
        <h2 className="text-2xl font-semibold mb-6">Our Financial Partners</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 place-items-center">
          {banks.map((bank, index) => (
            <div
              key={index}
              className="bg-[#111] p-4 rounded-2xl shadow-lg w-full max-w-[200px]"
            >
              <img
                src={bank.img}
                alt={bank.name}
                className="h-16 object-contain mx-auto mb-2"
              />
              <p className="text-sm font-semibold">{bank.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}




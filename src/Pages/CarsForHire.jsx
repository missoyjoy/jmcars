import React from "react";
import RangeRover from "../assets/RangeRover.jpg";
import Range1 from "../assets/Range1.jpg";
import Range2 from "../assets/Range2.jpg";
import BMW from "../assets/BMW.jpg";
import Bm2 from "../assets/Bm2.jpg";
import Benz from "../assets/Benz.jpg";
import Land1 from "../assets/Land1.jpg";
import Land2 from "../assets/Land2.jpg";
import LandCruiser from "../assets/LandCruiser.jpg";
import Ford1 from "../assets/Ford1.jpg";
import FordRanger from "../assets/FordRanger.jpg";
import Lambo from "../assets/Lambo.jpg";

const cars = [
  { img: RangeRover, name: "Range Rover Sport", color: "Black", fuel: "Diesel", price: "$200/day", status: "Available" },
  { img: Range1, name: "Range Rover Vogue", color: "White", fuel: "Petrol", price: "$220/day", status: "Available" },
  { img: Range2, name: "Range Rover Evoque", color: "Grey", fuel: "Petrol", price: "$180/day", status: "Hired" },
  { img: BMW, name: "BMW 5 Series", color: "Black", fuel: "Petrol", price: "$160/day", status: "Available" },
  { img: Bm2, name: "BMW X5", color: "White", fuel: "Diesel", price: "$190/day", status: "Available" },
  { img: Benz, name: "Mercedes Benz E-Class", color: "Silver", fuel: "Petrol", price: "$175/day", status: "Hired" },
  { img: Land1, name: "Toyota Land Cruiser", color: "White", fuel: "Diesel", price: "$250/day", status: "Available" },
  { img: Land2, name: "Land Cruiser Prado", color: "Black", fuel: "Diesel", price: "$230/day", status: "Available" },
  { img: LandCruiser, name: "Land Cruiser V8", color: "Grey", fuel: "Diesel", price: "$270/day", status: "Available" },
  { img: Ford1, name: "Ford Ranger", color: "Blue", fuel: "Diesel", price: "$150/day", status: "Available" },
  { img: FordRanger, name: "Ford Ranger Wildtrak", color: "Orange", fuel: "Diesel", price: "$165/day", status: "Hired" },
  { img: Lambo, name: "Lamborghini Huracán", color: "Yellow", fuel: "Petrol", price: "$800/day", status: "Available" },
];

export default function CarsForHire() {
  return (
    <div className="bg-black text-[#D4AF37] min-h-screen flex flex-col items-center py-10">
      <div className="text-center mb-12 px-4">
        <h1 className="text-4xl md:text-6xl font-bold">Cars For Hire</h1>
        <p className="text-gray-400 mt-3 text-lg">
          Hire your dream car — luxury, comfort, and performance for any occasion.
        </p>
      </div>

      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
        {cars.map((car, index) => (
          <div
            key={index}
            className="bg-[#111] rounded-2xl shadow-lg p-4 hover:scale-105 transition-transform"
          >
            <img src={car.img} alt={car.name} className="w-full h-52 object-cover rounded-xl" />
            <h3 className="text-xl font-semibold mt-4">{car.name}</h3>
            <p className="text-gray-400 text-sm mt-1">Color: {car.color}</p>
            <p className="text-gray-400 text-sm">Fuel Type: {car.fuel}</p>
            <p className="text-gray-400 text-sm">Price: {car.price}</p>
            <p className={`text-sm mt-1 ${car.status === "Available" ? "text-green-400" : "text-red-400"}`}>
              Status: {car.status}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

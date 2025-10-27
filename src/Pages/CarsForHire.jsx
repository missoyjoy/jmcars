import React, { useEffect, useState } from "react";

export default function CarsForSale() {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const API_KEY = "At3lQHNiKAU8sc8lC+u1oA==y8XE18Mf6peBCb9O";
    const makes = ["toyota", "honda", "nissan", "bmw", "ford"];

    async function fetchCars() {
      try {
        const responses = await Promise.all(
          makes.map((make) =>
            fetch(`https://api.api-ninjas.com/v1/cars?make=${make}`, {
              headers: { "X-Api-Key": API_KEY },
            }).then((res) => res.json())
          )
        );

        const combined = responses.flat();
        setCars(combined);
      } catch (err) {
        console.error("❌ Fetch error:", err);
        setError("Failed to load car data.");
      } finally {
        setLoading(false);
      }
    }

    fetchCars();
  }, []);

  if (loading) return <p className="text-center text-gray-500 py-10">Loading cars...</p>;
  if (error) return <p className="text-center text-red-500 py-10">{error}</p>;

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8 text-center text-[#D4AF37]">
        Cars for Sale
      </h1>
      <div className="grid md:grid-cols-3 gap-6">
        {cars.map((car, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
          >
            <h2 className="font-bold text-lg mb-2">
              {car.make} {car.model}
            </h2>
            <p className="text-gray-700">Year: {car.year}</p>
            <p className="text-gray-700">Drive: {car.drive}</p>
            <p className="text-gray-700">Transmission: {car.transmission}</p>
            <p className="text-gray-700">Fuel Type: {car.fuel_type}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

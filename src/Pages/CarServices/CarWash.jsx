import React, { useState } from "react";

export default function CarWash() {
  const services = [
    {
      title: "Exterior Hand Wash",
      description:
        "Removes dirt, grime, and road dust using premium car care products. Ensures a spotless, scratch-free finish.",
      price: 800,
      duration: "30 minutes",
    },
    {
      title: "Interior Cleaning & Vacuuming",
      description:
        "Deep cleaning of seats, carpets, dashboards, and air vents using safe cleaning agents.",
      price: 1200,
      duration: "45 minutes",
    },
    {
      title: "Engine Cleaning",
      description:
        "Safely removes grease and oil buildup from your engine bay to improve performance and appearance.",
      price: 1500,
      duration: "1 hour",
    },
    {
      title: "Waxing & Polishing",
      description:
        "Enhances shine and protects paint using premium wax and polish for a brand-new look.",
      price: 2000,
      duration: "1.5 hours",
    },
    {
      title: "Upholstery & Leather Care",
      description:
        "Professional cleaning and conditioning for leather and fabric seats to prevent cracking and fading.",
      price: 2500,
      duration: "2 hours",
    },
    {
      title: "Full Body Detailing",
      description:
        "Complete inside-and-out rejuvenation including wash, polish, vacuum, and tire dressing.",
      price: 4000,
      duration: "3 hours",
    },
  ];

  const [carDetails, setCarDetails] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [serviceInfo, setServiceInfo] = useState(null);

  const handleServiceChange = (e) => {
    const selected = services.find((s) => s.title === e.target.value);
    setSelectedService(e.target.value);
    setServiceInfo(selected);
  };

  const handleBooking = () => {
    if (!carDetails || !selectedService) {
      alert("Please fill in your car details and select a service before booking.");
      return;
    }
    alert(
      `✅ Booking confirmed for ${carDetails}\nService: ${selectedService}\nPrice: KSh ${serviceInfo.price}\nDuration: ${serviceInfo.duration}`
    );
    setCarDetails("");
    setSelectedService("");
    setServiceInfo(null);
  };

  return (
    <div className="bg-black text-[#D4AF37] min-h-screen py-16 px-6 flex flex-col items-center">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Car Wash Services</h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Keep your car looking brand new with our premium wash and detailing services.
        </p>
      </div>

      {/* Services Section */}
      <div className="max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-[#111] p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <h2 className="text-2xl font-semibold mb-3">{service.title}</h2>
            <p className="text-gray-400 text-sm mb-2">{service.description}</p>
            <p className="text-[#D4AF37] font-semibold">
              Price: KSh {service.price.toLocaleString()} | Duration: {service.duration}
            </p>
          </div>
        ))}
      </div>

      {/* Booking Section */}
      <div className="bg-[#111] p-8 rounded-2xl shadow-lg w-full max-w-3xl">
        <h2 className="text-3xl font-bold text-center mb-6">
          Book a Car Wash Service
        </h2>
        <div className="flex flex-col gap-4">
          {/* Car Details Input */}
          <input
            type="text"
            placeholder="Enter your car details (e.g., Toyota Prado, Nissan Note)"
            value={carDetails}
            onChange={(e) => setCarDetails(e.target.value)}
            className="p-3 rounded-lg bg-black border border-[#D4AF37] text-white focus:outline-none"
          />

          {/* Service Dropdown */}
          <select
            value={selectedService}
            onChange={handleServiceChange}
            className="p-3 rounded-lg bg-black border border-[#D4AF37] text-white focus:outline-none"
          >
            <option value="">Select a Service</option>
            {services.map((service, index) => (
              <option key={index} value={service.title}>
                {service.title}
              </option>
            ))}
          </select>

          {/* Service Info Display */}
          {serviceInfo && (
            <div className="text-center text-gray-300">
              <p>
                <span className="text-[#D4AF37] font-semibold">Price:</span> KSh{" "}
                {serviceInfo.price.toLocaleString()}
              </p>
              <p>
                <span className="text-[#D4AF37] font-semibold">Duration:</span>{" "}
                {serviceInfo.duration}
              </p>
            </div>
          )}

          {/* Book Button */}
          <button
            onClick={handleBooking}
            className="bg-[#D4AF37] text-black font-semibold py-3 rounded-lg hover:bg-yellow-600 transition-colors"
          >
            Book Service
          </button>
        </div>
      </div>
    </div>
  );
}



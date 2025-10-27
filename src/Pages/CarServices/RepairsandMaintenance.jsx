import React from "react";

export default function RepairsandMaintenance()
{
 
  const services = [
    {
      title: "1. General Vehicle Servicing",
      description:
        "Regular maintenance is crucial for keeping your car in peak condition. Our general servicing includes oil and filter changes to ensure engine efficiency, brake system inspections to enhance safety, suspension checks for a smooth ride, and fluid level top-ups for optimal vehicle performance. Additionally, we conduct battery inspections and replacements and provide comprehensive vehicle diagnostics using modern tools to detect and resolve potential issues early.",
    },
    {
      title: "2. Engine Diagnostics and Repair",
      description:
        "Our expert mechanics use advanced diagnostic equipment to detect and repair engine-related issues. Whether your check engine light is on or you need an engine tune-up, we ensure maximum performance. We handle cylinder head repairs, timing belt and chain replacements, and fuel injection system servicing to enhance fuel efficiency and longevity.",
    },
    {
      title: "3. Brake System Services",
      description:
        "A functional braking system is essential for your safety. Our brake system services include brake pad and disc replacements, brake fluid changes, and ABS system diagnostics to keep your brakes responsive. We also perform handbrake adjustments for added security.",
    },
    {
      title: "4. Transmission Services",
      description:
        "We specialize in both manual and automatic transmission repairs. Our services include transmission fluid changes to prevent gear wear, clutch replacements to maintain smooth shifting, and gearbox diagnostics to fix shifting issues before they escalate.",
    },
    {
      title: "5. Suspension and Steering Repairs",
      description:
        "A stable ride depends on a well-maintained suspension and steering system. We offer shock absorber and strut replacements, wheel alignment and balancing for smooth handling, and power steering fluid checks and repairs to ensure effortless steering control.",
    },
    {
      title: "6. Electrical System Repairs",
      description:
        "Modern vehicles are highly dependent on electrical systems, and our specialists handle battery and alternator testing, starter motor repairs, and wiring diagnostics. Additionally, we provide ECU (Engine Control Unit) programming and repairs to optimize vehicle performance.",
    },
  ];

  return (
    <div className="bg-black text-[#D4AF37] min-h-screen py-16 px-6 flex flex-col items-center">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Repairs & Maintenance
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Quality auto care and expert servicing to keep your car performing at its best.
        </p>
      </div>

      {/* Services List */}
      <div className="max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-[#111] p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <h2 className="text-2xl font-semibold mb-3">{service.title}</h2>
            <p className="text-gray-400 leading-relaxed text-sm">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}






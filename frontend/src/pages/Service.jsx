import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Service = () => {
  const [services, setServices] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchServices = async () => {
    try {
      const res = await fetch("https://skilllink-backend.vercel.app/api/v1/service/getall");
      const data = await res.json();
      setServices(data);
    } catch (err) {
      console.error("Error fetching services:", err);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  // Filter services based on search input
  const filteredServices = services.filter((service) => {
    const term = searchTerm.toLowerCase();
    return (
      service.title.toLowerCase().includes(term) ||
      (service.keywords &&
        service.keywords.some((kw) => kw.toLowerCase().includes(term)))
    );
  });

  return (
    <div className="min-h-screen w-screen max-w-[90%] mx-auto flex flex-col">
      <div className="mt-10">
        <h1 className="text-4xl font-semibold">Our Services for your Comfort.</h1>
        <p className="text-sm text-gray-400 mt-2">
          Discover services tailored to your needs. Search, explore, and book
          instantly.
        </p>

        {/* Search Bar */}
        <div className="mt-6 flex justify-between items-center">
          <input
            type="text"
            placeholder="Search services..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full sm:w-1/2 px-4 py-2 border border-gray-700 rounded-lg bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Services Grid */}
        <div
          className="grid gap-6 mt-8 
          grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        >
          {filteredServices.map((service, idx) => (
            <Link
              key={idx}
              to={`/service/${service._id}`}
              className="bg-black/30 border border-[#33394C] shadow-md rounded-lg overflow-hidden hover:scale-105 duration-300"
            >
              <img
                src={service.imageURL}
                alt={service.title}
                className="w-full h-48 object-cover"
              />

              <div className="p-4">
                <h2 className="text-lg font-semibold">{service.title}</h2>

                <p className="text-gray-500 text-sm mt-1 line-clamp-2">
                  {service.description}
                </p>

                <p className="mt-3 font-bold text-white">₹{service.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;

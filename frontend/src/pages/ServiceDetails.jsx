import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios'

export const ServiceDetails = () => {
  const { id } = useParams();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [modal, setModal] = useState(false)
  const [serviceProvider, setServiceProvider] = useState();

  const fetchService = async () => {
    try {
      const res = await fetch(`https://skilllink-backend.vercel.app/api/v1/service/${id}/get`);
      if (!res.ok) throw new Error("Failed to fetch service");
      const data = await res.json();
      console.log(data)
      setService(data);
    } catch (err) {
      console.error("Error fetching service:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const getProfile = async () => {
    try {
      const res = await fetch(`https://skilllink-backend.vercel.app/api/v1/service/profile/${id}`);
      if (!res.ok) throw new Error("Failed to fetch service");
      const data = await res.json();
      setServiceProvider(data);
      console.log(res)
    } catch (err) {
      console.error("Error fetching service:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchService();
  }, [id]);

  if (loading) return <div className="text-center mt-20">Loading...</div>;
  if (error) return <div className="text-center mt-20 text-red-400">{error}</div>;

  return (
    <div className="max-w-6xl mx-auto mt-12 px-4 sm:px-6 lg:px-8">
      {/* Main container */}
      <div className="bg-black/30 border border-[#33394C] rounded-xl shadow-lg p-6 md:flex md:gap-8">
        {/* Image */}
        <div className="md:w-1/2">
          <img
            src={service.imageURL}
            alt={service.title}
            className="w-full h-72 md:h-full object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Details */}
        <div className="md:w-1/2 mt-6 md:mt-0 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-white">{service.title}</h1>
            <p className="mt-4 text-gray-300 text-sm md:text-base">{service.description}</p>

            {/* Keywords/Tags */}
            {service.keywords?.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-2">
                {service.keywords.map((kw, i) => (
                  <span
                    key={i}
                    className="text-xs md:text-sm bg-gray-800 px-3 py-1 rounded-full text-gray-300"
                  >
                    #{kw}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Price & Book Now */}
          <div className="mt-6 md:mt-8 flex flex-col gap-4">
            <div className="text-2xl font-bold text-white">
              Price: <span className="text-indigo-400">₹{service.price}</span>
            </div>
            <button onClick={()=>{setModal(true); getProfile();}} className="bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-lg text-white text-lg font-semibold shadow-lg transition duration-200">
              Connect Now
            </button>
          </div>
        </div>
      </div>

      {/* Additional Info */}
      <div className="mt-10 bg-black/20 border border-[#33394C] rounded-xl p-6 shadow-inner">
        <h2 className="text-2xl font-semibold text-white mb-4">What’s Included</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>Professional work tailored to your requirements</li>
          <li>Unlimited revisions (if applicable)</li>
          <li>High-quality deliverables</li>
          <li>Support and guidance</li>
        </ul>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-semibold text-white mb-3">About the Freelancer</h2>
        <p className="text-gray-300">
          Skilled freelancer providing top-notch services in the requested domain.
        </p>
      </div>

     {modal && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
    <div className="bg-[#151A28] border border-[#32394B] rounded-2xl shadow-2xl w-[90%] max-w-lg p-6 relative text-white">

      {/* Close button */}
      <button
        onClick={() => setModal(false)}
        className="absolute top-4 right-4 text-gray-400 hover:text-gray-200 transition"
      >
        ✕
      </button>

      {/* Freelancer Header */}
      <div className="flex items-center gap-4 mb-5">
        <div>
          <h2 className="text-xl font-semibold">
            {serviceProvider?.name}
          </h2>
          <p className="text-gray-400 text-sm">
            {serviceProvider?.profession}
          </p>
        </div>
      </div>

      {/* Freelancer Details */}
      <div className="text-gray-300 space-y-2">
        <p>
          <span className="text-gray-400">Phone:</span>{" "}
          {serviceProvider?.phone}
        </p>
        <p>
          <span className="text-gray-400">Experience:</span>{" Talented and Skilled Professional"}
          {serviceProvider?.experience}
        </p>
      </div>

      {/* Action Buttons */}
      <div className="mt-6 flex justify-end gap-3">
        <button
          onClick={() => setModal(false)}
          className="px-4 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 transition"
        >
          Close
        </button>
        <button
          onClick={() => alert("Payment Portal not completed.. coming soon.")}
          className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 transition"
        >
          Continue
        </button>
      </div>
    </div>
  </div>
)}


    </div>
  );
};

export default ServiceDetails;

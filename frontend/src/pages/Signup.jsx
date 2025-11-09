import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { uri } from "../data/api";
import "react-toastify/dist/ReactToastify.css";

export const Signup = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState("user");
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    password: "",
    city: "",
    district: "",
    pinCode: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const endpoint =
        role === "user"
          ? `${uri}/auth/user/register`
          : `${uri}/auth/freelancer/register`;

      const payload =
        role === "user"
          ? {
              fullName: formData.fullName,
              phone: formData.phone,
              password: formData.password,
            }
          : formData;

      const res = await axios.post(endpoint, payload, {
        headers: { "Content-Type": "application/json" },
      });

      toast.success(`Registered successfully as ${role}!`);
      setTimeout(() => navigate("/auth/login"), 2000);
    } catch (err) {
      toast.error(err.response?.data?.message || "Registration failed!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center bg-[#151A28] text-white">
      <ToastContainer />
      <div className="p-8 bg-black/40 border border-[#33394C] rounded-2xl w-full max-w-md">
        <h1 className="text-3xl mb-4 text-center font-semibold">Create Account</h1>

        <div className="flex justify-center gap-3 mb-6">
          <button
            onClick={() => setRole("user")}
            className={`px-4 py-2 rounded-full border text-sm transition ${
              role === "user"
                ? "bg-blue-800 border-blue-700 text-white"
                : "border-gray-600 text-gray-400"
            }`}
          >
            User
          </button>
          <button
            onClick={() => setRole("freelancer")}
            className={`px-4 py-2 rounded-full border text-sm transition ${
              role === "freelancer"
                ? "bg-blue-800 border-blue-700 text-white"
                : "border-gray-600 text-gray-400"
            }`}
          >
            Freelancer
          </button>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            name="fullName"
            onChange={handleChange}
            placeholder="Full Name"
            className="border border-[#33394C] rounded-full px-4 py-2 bg-transparent"
            required
          />
          <input
            name="phone"
            type="number"
            onChange={handleChange}
            placeholder="Phone Number"
            className="border border-[#33394C] rounded-full px-4 py-2 bg-transparent"
            required
          />
          <input
            name="password"
            type="password"
            onChange={handleChange}
            placeholder="Password"
            className="border border-[#33394C] rounded-full px-4 py-2 bg-transparent"
            required
          />

          {role === "freelancer" && (
            <>
              <input
                name="city"
                placeholder="City"
                onChange={handleChange}
                className="border border-[#33394C] rounded-full px-4 py-2 bg-transparent"
              />
              <input
                name="district"
                placeholder="District"
                onChange={handleChange}
                className="border border-[#33394C] rounded-full px-4 py-2 bg-transparent"
              />
              <input
                name="pinCode"
                placeholder="Pin Code"
                onChange={handleChange}
                className="border border-[#33394C] rounded-full px-4 py-2 bg-transparent"
              />
            </>
          )}

          <button
            type="submit"
            disabled={loading}
            className={`bg-blue-950 py-2 rounded-full mt-2 hover:bg-blue-900 transition ${
              loading ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Registering..." : `Register as ${role}`}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
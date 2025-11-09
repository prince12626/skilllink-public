import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const Dashboard = () => {
  const [services, setServices] = useState([]);
  const [newService, setNewService] = useState({
    title: '',
    description: '',
    price: '',
    imageURL: '',
    keywords: '',
  });

  // Get all services
  const getServices = async () => {
    const res = await axios.get('https://skilllink-backend.vercel.app/api/v1/service/getall');
    setServices(res.data);
  };

  // Handle form input changes for new service
  const handleChange = (e) => {
    setNewService({ ...newService, [e.target.name]: e.target.value });
  };

  // Create new service
  const handleCreateService = async () => {
    try {
      const { title, description, price, imageURL, keywords } = newService;
      const res = await axios.post(
        'https://skilllink-backend.vercel.app/api/v1/service/create',
        { title, description, price, imageURL, keywords: keywords.split(','), token:`${localStorage.getItem('token')}` },
      );
      setServices([...services, res.data]);
      setNewService({ title: '', description: '', price: '', imageURL: '', keywords: '' });
    } catch (error) {
      console.log('Error creating service:', error);
    }
  };

  // Delete a service
  const handleDeleteService = async (id) => {
    try {
      await axios.delete(`https://skilllink-backend.vercel.app/api/v1/service/delete/${id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      setServices(services.filter(service => service._id !== id));
    } catch (error) {
      console.log('Error deleting service:', error);
    }
  };

  useEffect(() => {
    getServices();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Freelancer Dashboard</h1>

      {/* Create Service Form */}
      <div className="mb-8 p-4 bg-gray-800 rounded-md">
        <h2 className="text-xl font-semibold mb-4">Create New Service</h2>
        <input
          type="text"
          name="title"
          value={newService.title}
          onChange={handleChange}
          placeholder="Service Title"
          className="w-full p-2 mb-4 bg-gray-900 text-white rounded-md"
        />
        <input
          type="text"
          name="description"
          value={newService.description}
          onChange={handleChange}
          placeholder="Service Description"
          className="w-full p-2 mb-4 bg-gray-900 text-white rounded-md"
        />
        <input
          type="text"
          name="price"
          value={newService.price}
          onChange={handleChange}
          placeholder="Price"
          className="w-full p-2 mb-4 bg-gray-900 text-white rounded-md"
        />
        <input
          type="text"
          name="imageURL"
          value={newService.imageURL}
          onChange={handleChange}
          placeholder="Image URL"
          className="w-full p-2 mb-4 bg-gray-900 text-white rounded-md"
        />
        <input
          type="text"
          name="keywords"
          value={newService.keywords}
          onChange={handleChange}
          placeholder="Keywords (comma-separated)"
          className="w-full p-2 mb-4 bg-gray-900 text-white rounded-md"
        />
        <button
          onClick={handleCreateService}
          className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-6 rounded-md"
        >
          Create Service
        </button>
      </div>

      {/* Display Services */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Your Services</h2>
        {services.length === 0 ? (
          <p>No services available.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {services.map((service) => (
              <div key={service._id} className="bg-gray-800 rounded-lg shadow-md p-4">
                <img
                  src={service.imageURL}
                  alt={service.title}
                  className="w-full h-48 object-cover mb-4 rounded-md"
                />
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="text-gray-400 mt-2">{service.description}</p>
                <p className="mt-2 font-bold text-lg text-white">₹{service.price}</p>

                {/* Delete Button */}
                <button
                  onClick={() => handleDeleteService(service._id)}
                  className="mt-4 bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;

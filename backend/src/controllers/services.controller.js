const serviceModel = require('../models/service.model');
const freelancerModel = require('../models/freelancer.model')
const jwt = require("jsonwebtoken")

const getServices = async (req, res) => {
            try {
                        const allServices = await serviceModel.find();
                        return res.status(201).json(allServices);
            }
            catch (err) {
                        return res.status(500).json({message:'Internal Server Error!'})
            }
}

const getServiceById = async (req, res) => {
            try {
                        const id = req.params.id;
                        const service = await serviceModel.findById(id);
                        return res.status(201).json(service);
            }
            catch (err) {
                        return res.status(500).json({ message: 'Internal Server Error!' });
            }
}

const createService = async (req, res) => {
            try {
                        const { title,token, description, imageURL, keywords, price } = req.body;
                        if (!title || !token || !description || !imageURL || !keywords || !price ){
                          return res.status(400).json({
                            success: false,
                            message :"All feilds are required.",
                          })
                        }

                        const {id} = jwt.decode(token, process.env.SECRET);

                        const createdService = await serviceModel.create({owner:id, title, description ,imageURL , keywords, price})
                        res.status(201).json({
                            message: "Service Created Successfully.",
                            success: true,
                            data: createdService
                        })
            }
            catch (err) {
                        return res.status(500).json({message:'Internal Server Error!'})
            }
}

const deleteService = async (req, res) => {
  try {
    const { id } = req.params;  // Get the service ID from the URL parameter

    // Check if the service exists
    const service = await serviceModel.findById(id);
    if (!service) {
      return res.status(404).json({ message: 'Service not found.' });
    }

    // Delete the service from the database
    await serviceModel.findByIdAndDelete(id);

    return res.status(200).json({ message: 'Service deleted successfully.' });
  } catch (err) {
    return res.status(500).json({ message: 'Internal Server Error!', err });
  }
};

const getProfile = async (req,res)=>{
  const id = req.params.id;

  const service = await serviceModel.findById(id);
  const profile = await freelancerModel.findById(service.owner);

  return res.status(201).json(profile)
}

module.exports =  { createService, getServiceById, getServices, deleteService, getProfile};
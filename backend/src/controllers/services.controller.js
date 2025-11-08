const serviceModel = require('../models/service.model');

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
                        const id = req.pararms.id;
                        const service = await serviceModel.findById(id);
                        return res.status(201).json(service);
            }
            catch (err) {
                        return res.status(500).json({ message: 'Internal Server Error!' });
            }
}

const createService = async (req, res) => {
            try {
                        const { user, title, description, imageURL, keywords, price } = req.body;
            }
            catch (err) {
                        return res.status(500).json({message:'Internal Server Error!'})
            }
}
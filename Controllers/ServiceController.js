const Service = require("../Models/ServiceModel");

module.exports = {
  addService: async (req, res) => {
    const serviceName = req.body.serviceName;
    const serviceImage = req.body.serviceImage;
    const serviceDescription = req.body.serviceDescription;
    const serviceAddress = req.body.serviceAddress;
    const serviceWorkingHours = req.body.serviceWorkingHours;
    const servicePhone = req.body.servicePhone;
    const servicePrice = req.body.servicePrice;
    const serviceLocation = req.body.serviceLocation;
    const serviceCategory = req.body.serviceCategory;

    try {
      service = new Service({
        serviceName,
        serviceImage,
        serviceDescription,
        serviceAddress,
        serviceWorkingHours,
        servicePhone,
        servicePrice,
        serviceLocation,
        serviceCategory,
      });
      await service.save();
      res.json(service);
    } catch (error) {
      console.error(error.message);
    }
  },

  getService: async (req, res) => {
    try {
      const service = await Service.find().populate("city", "cityName");
      res.json(service);
    } catch (error) {
      console.error(error.message);
    }
  },

  deleteService: async (req, res) => {
    try {
      const service = await Service.findByIdAndDelete(req.params.id);
      res.json(service);
    } catch (error) {
      console.error(error.message);
    }
  },

  updateService: async (req, res) => {
    try {
      const service = await Service.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      res.json(service);
    } catch (error) {
      console.error(error.message);
    }
  },
};

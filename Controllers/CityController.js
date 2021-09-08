const City = require("../Models/CityModel");

module.exports = {
  addCity: async (req, res) => {
    const cityName = req.body.cityName;
    const cityImage = req.body.cityImage;
    const cityDescription = req.body.cityDescription;
    const cityServices = req.body.cityServices;

    try {
      city = new City({
        cityName,
        cityImage,
        cityDescription,
        cityServices,
      });
      await city.save();
      res.json(city);
    } catch (error) {
      console.error(error.message);
    }
  },

  getCity: async (req, res) => {
    try {
      const city = await City.find().populate("service");
      res.json(city);
    } catch (error) {
      console.error(error.message);
    }
  },

  getCurrentCity: async (req, res) => {
    var id = req.params.id;
    City.findOne({ _id: id }, function (err, city) {
      if (err) {
        return res
          .status(500)
          .json({ message: "Error when getting city.", error: err });
      }
      if (!city) {
        return res.status(404).json({ message: "No such city" });
      }
      return res.json(city);
    });
  },

  deleteCity: async (req, res) => {
    try {
      const city = await City.findByIdAndDelete(req.params.id);
      res.json(city);
    } catch (error) {
      console.error(error.message);
    }
  },

  updateCity: async (req, res) => {
    try {
      const city = await City.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      res.json(city);
    } catch (error) {
      console.error(error.message);
    }
  },
};

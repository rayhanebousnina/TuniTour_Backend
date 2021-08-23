const City = require('../Models/CityModel');


module.exports = {
   

    addCity: async(req,res) => {

        const cityName = req.body.cityName
        const cityImage = req.body.cityImage
        const cityDescription = req.body.cityDescription
        const cityPlaces = req.body.cityPlaces
        const cityServices = req.body.cityServices

        try {
            city = new City({
                cityName,
                cityImage,
                cityDescription,
                cityPlaces,
                cityServices
            })
            await city.save()
            res.json(city)
        }
        catch (error) {
            console.error(error.message)
        }
    },

    getCity: async(req,res) => {
        try {
            const city = await City.find()
            res.json(city)
        }
        catch (error) {
            console.error(error.message)
        }
    },

    deleteCity: async(req,res) => {
        try {
            const city = await City.findByIdAndDelete(req.params.id)
            res.json(city)
        }
        catch (error) {
            console.error(error.message)
        }
    },

    updateCity: async(req,res) => {
        try {
            const city = await City.findByIdAndUpdate(req.params.id, req.body, {new : true})
            res.json(city)
        }
        catch (error) {
            console.error(error.message)
        }
    }
};

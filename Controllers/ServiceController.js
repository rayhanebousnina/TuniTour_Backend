const Service = require('../Models/ServiceModel');


module.exports = {
   

    addService: async(req,res) => {

        const serviceName = req.body.serviceName
        const serviceImage = req.body.serviceImage
        const serviceDescription = req.body.serviceDescription
        const serviceDetails = req.body.serviceDetails
        const serviceLocation = req.body.serviceLocation
        const serviceCategory = req.body.serviceCategory
        

        try {
            service = new Service({
                serviceName,
                serviceImage,
                serviceDescription,
                serviceDetails,
                serviceLocation,
                serviceCategory
            })
            await service.save()
            res.json(service)
        }
        catch (error) {
            console.error(error.message)
        }
    },

    getService: async(req,res) => {
        try {
            const service = await Service.find()
            res.json(service)
        }
        catch (error) {
            console.error(error.message)
        }
    },

    deleteService: async(req,res) => {
        try {
            const service = await Service.findByIdAndDelete(req.params.id)
            res.json(service)
        }
        catch (error) {
            console.error(error.message)
        }
    },

    updateService: async(req,res) => {
        try {
            const service = await Service.findByIdAndUpdate(req.params.id, req.body, {new : true})
            res.json(service)
        }
        catch (error) {
            console.error(error.message)
        }
    }
};

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const serviceSchema = new Schema({

    serviceName : {
        type: String,
        required: true
    },
    serviceImage : {
        type: String,
        required: true
    },
    serviceDescription : {
        type: String,
        required: true
    },
    serviceDetails : {
        type: Array,
        required: true
    },
    serviceLocation : {
        type: String,
        required: true
    },
    serviceCategory : {
        type: String,
        required: true
    }
})

module.exports = service = mongoose.model('service', serviceSchema)

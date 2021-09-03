const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const serviceSchema = new Schema({
  serviceName: {
    type: String,
    required: true,
  },
  serviceImage: {
    type: String,
    required: true,
  },
  serviceDescription: {
    type: String,
    required: true,
  },
  serviceDetails: {
    type: Array,
    required: true,
  },
  serviceLocation: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "city",
    required: true,
  },
  serviceCategory: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "category",
    required: true,
  },
});

module.exports = service = mongoose.model("service", serviceSchema);

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const serviceSchema = new Schema({
  serviceName: {
    type: String,
    required: true,
  },
  serviceImage: {
    type: String,
    // required: true,
  },
  serviceDescription: {
    type: String,
    required: true,
  },
  serviceAddress: {
    type: String,
    required: true,
  },
  serviceWorkingHours: {
    type: String,
    required: true,
  },
  servicePhone: {
    type: String,
    required: true,
  },
  servicePrice: {
    type: String,
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

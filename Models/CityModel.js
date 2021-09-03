const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const citySchema = new Schema({
  cityName: {
    type: String,
    required: true,
  },
  cityImage: {
    type: String,
    required: true,
  },
  cityDescription: {
    type: String,
    required: true,
  },
  cityServices: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "service",
    required: true,
  },
});

module.exports = city = mongoose.model("city", citySchema);

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const categorySchema = new Schema({

    categoryName : {
        type: String,
        required: true
    },
    categoryDescription : {
        type: String,
        required: true
    },
    categoryImage : {
        type: String,
        required: true
    }
})

module.exports = category = mongoose.model('category', categorySchema)

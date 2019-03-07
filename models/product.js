const mongoose = require('mongoose');

productSchema = new mongoose.Schema({
    title : String,
    images : [],
    description : String,
    price : String,
    short_title_description : String,
    weight : [],
    color : [],
    category : String,
    rating : Number
});

module.exports = mongoose.model("Product", productSchema);

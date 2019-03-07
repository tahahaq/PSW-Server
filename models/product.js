const mongoose = require('mongoose');

productSchema = new mongoose.Schema({
    title : String,
    banner_img_url : String,
    description : String,
    price : String,
    short_title_description : String,
    product_images : [],
    weight : [],
    color : [],
    category : String,
    rating : Number
});

module.exports = mongoose.model("Product", productSchema);

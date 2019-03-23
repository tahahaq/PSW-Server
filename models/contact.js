const mongoose = require('mongoose');

contactSchema = new mongoose.Schema({
    email : String,
    phone : [],
    address : String,
    title : String
});

module.exports = mongoose.model("Contact", contactSchema);

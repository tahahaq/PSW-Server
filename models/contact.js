const mongoose = require('mongoose');

contactSchema = new mongoose.Schema({
    email : String,
    phone : [],
    address : String
});

module.exports = mongoose.model("Contact", contactSchema);

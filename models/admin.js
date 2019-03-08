var mongoose = require("mongoose");

adminSchema  = new mongoose.Schema({
    email : String,
    password : String,
    reset_password_token: String,
    reset_password_expires: Date
});


module.exports = mongoose.model("Admin", adminSchema);
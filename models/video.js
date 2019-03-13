const mongoose = require('mongoose');

videoSchema = new mongoose.Schema({
    link : String
});
module.exports = mongoose.model("Video", videoSchema);

let express = require("express"),
    methodOverride = require("method-override"),
    app = express(),
    constants = require('./utils/constant'),
    utilsFunctions = require('./utils/functions'),
    cors = require('cors'),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose");

let emailRoutes = require("./routes/email"),
    productRoutes = require('./routes/product'),
    adminRoutes = require('./routes/admin');

// App Config

mongoose.connect("mongodb://psw:qweasd123@ds223605.mlab.com:23605/psw_db");

app.use(bodyParser.json({extended: true}));
app.use(cors());
app.use(methodOverride("_method"));


app.use('/email', emailRoutes);
app.use(productRoutes);
app.use('/admin' , adminRoutes);


const port = process.env.PORT || 7001;
app.listen(port);

console.log(`PSW Server listening on ${port}`);

module.exports.app = app;
var exports = module.exports = {},
    utilsFunctions = require('../utils/functions'),
    productModel = require('../models/product'),
    adminModel = require('../models/admin'),
    contactModel = require('../models/contact'),
    videoModel = require('../models/video'),
    jwt = require('jsonwebtoken'),
    bcrypt = require('bcrypt'),
    constants = require('../utils/constant');

exports.authenticateAdmin = async (user) => {
    try {
        let admin = await adminModel.find({email: user.email});
        if (utilsFunctions.isEmpty(admin)) {
            throw new Error(constants.responseMessages.emailNotFound)
        }
        let match = await bcrypt.compare(user.password, admin[0].password);
        if (!match) {
            throw new Error(constants.responseMessages.passwordNotMatch);
        }

        let token = jwt.sign({id: admin[0]._id}, constants.secret, {
            expiresIn: 84600
        });

        let returningUser = admin[0].toObject();
        delete returningUser.password;


        return {auth: true, token: token, user: returningUser}

    } catch (e) {
        console.log(e);
        throw new Error(e);
    }
};



exports.getVideoLink = async () => {
    try {
        return videoModel.find({});
    }  catch (e) {
        console.log(e);
        throw new Error(e);
    }
};

exports.getContactDetails = async () => {
    try {
        return contactModel.find({});
    }  catch (e) {
        console.log(e);
        throw new Error(e);
    }
};

exports.getAllProducts = async () => {
  try {
      return productModel.find({});
  }  catch (e) {
      console.log(e);
      throw new Error(e);
  }
};

exports.getProductByCategory = async (category) => {
    try {
       return await productModel.find({category});
    }  catch (e) {
        console.log(e);
        throw new Error(e);
    }
};

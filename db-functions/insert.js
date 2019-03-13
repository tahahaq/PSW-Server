var exports = module.exports = {},
    constants = require('../utils/constant'),
    utilsFunctions = require('../utils/functions'),
    emailModel = require('../models/email'),
    jwt = require('jsonwebtoken'),
    bcrypt = require('bcrypt'),
    adminModel = require('../models/admin'),
    productModel = require('../models/product'),
    videoModel = require('../models/video'),
    contactModel = require('../models/contact'),
    db_read = require('./read');

exports.insertVideoLink = async (video) => {
    try {
        await videoModel.create(video);
        return constants.responseMessages.Success;
    }  catch (e) {
        console.log(e);
        throw new Error(e)
    }
};

exports.insertProduct = async (product) => {
    try {
        await productModel.create(product);
        return constants.responseMessages.productAdded;
    }  catch (e) {
        console.log(e);
        throw new Error(e)
    }
};

exports.insertContactDetails = async (contact) => {
    try {
        await contactModel.create(contact);
        return constants.responseMessages.contactDetailsAdded;
    }  catch (e) {
        console.log(e);
        throw new Error(e)
    }
};


exports.insertEmailForSubscription = async (email) => {
  try {
      let ifDuplicate = await emailModel.findOne(email);
      if(!utilsFunctions.isEmpty(ifDuplicate)){
            throw new Error("Email is already subscribed");
        }
      await emailModel.create(email);
     return constants.responseMessages.Success;

  }  catch (e) {
      console.log(e);
      throw new Error(e)
  }
};

exports.insertAdmin = async (user) => {
    try {
        if (await utilsFunctions.isDuplicateUser(user)) {
            let hashOfPassword = await bcrypt.hash(user.password, constants.SALT);

            let insertedUser = await adminModel.create({
                password: hashOfPassword,
                email: user.email,
            });

            let token = jwt.sign({id : insertedUser._id } , constants.secret , {
                expiresIn: 84600
            });

            let returningUser = insertedUser.toObject();
            delete returningUser.password;

            return {auth : true  , token : token , user : returningUser};
        }
        throw new Error(constants.responseMessages.emailAlreadyExists)

    } catch (e) {
        console.log(e);
        throw new Error(e)
    }

};


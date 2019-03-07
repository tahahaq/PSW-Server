var exports = module.exports = {},
    constants = require('../utils/constant'),
    utilsFunctions = require('../utils/functions'),
    emailModel = require('../models/email'),
    productModel = require('../models/product'),
    db_read = require('./read');


exports.insertProduct = async (product) => {
    try {
        await productModel.create(product);
        return constants.responseMessages.productAdded;
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

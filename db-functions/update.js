var exports = module.exports = {},
    productModel = require('../models/product'),
    contactModel = require('../models/contact'),
    videoModel = require('../models/video'),
    constants = require('../utils/constant');

exports.updateVideoLink = async (id, link) => {
    try {
        await videoModel.findByIdAndUpdate(id,link);
        return constants.responseMessages.videoLinkUpdated;
    } catch (e) {
        console.log(e);
        throw new Error(e)
    }
};

exports.updateContactDetails = async (id, contact) => {
    try {
        await contactModel.findByIdAndUpdate(id,contact);
        return constants.responseMessages.contactDetailsUpdated;
    } catch (e) {
        console.log(e);
        throw new Error(e)
    }
};

exports.updateProduct = async (id, product) => {
    try {
        await productModel.findByIdAndUpdate(id,product);
        return constants.responseMessages.Success
    } catch (e) {
        console.log(e);
        throw new Error(e)
    }
};
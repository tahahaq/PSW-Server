var exports = module.exports = {},
    productModel = require('../models/product'),
    constants = require('../utils/constant');

exports.updateProduct = async (id, product) => {
    try {
        await productModel.findByIdAndUpdate(id,product);
        return constants.responseMessages.Success
    } catch (e) {
        console.log(e);
        throw new Error(e)
    }
};
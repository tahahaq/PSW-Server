let express = require('express'),
    router = express.Router(),
    constants = require('../utils/constant'),
    db_insert = require('../db-functions/insert'),
    db_delete = require('../db-functions/delete'),
    db_read = require('../db-functions/read'),
    db_update = require('../db-functions/update'),
    utilsFunction = require('../utils/functions'),
    emailModel = require('../models/email');


////////////////////////////////////////////////////  EMAIL  /////////////////////////////////////////////////////////////


// POST

/**
 * @api {post} /admin/product Inserts product
 * @apiGroup Admin
 * @apiName InsertProduct
 *   @apiParamExample {json} Input
 *{
 *    "title" : "White Rock Himalayan Salt Lampp",
 *    "banner_img_url" : "Img5",
 *      "description" : "100% Natural Himalayan white rock salt from the mines Of Khewra (Pakistan)Wrapped in plastic, packed in carton box with lamp wire and 120 watt bulb",
 *      "price" : "4500",
 *      "short_title_description" : "Available in all four colors",
 *      "product_images" : ["product1_img1", "product1_img2" , "t"],
 *      "weight" : [2, 3, 4, 6, 7, 8, 9, 10],
 *      "color" : ["White" , "Black"],
 *      "category" : "1",
 *      "rating" : 5
 *}
 * @apiSuccessExample {json} Success
 *{
 *   "responseCode": 201,
 *  "responseMessage": "Success",
  *  "data": {
   *     "result": "Successfully added product"
 * }
 *}
 * @apiErrorExample {json} List error
 *    HTTP/1.1 503 Internal Server Error
 */

router.post("/product", function (req, res) {
    db_insert.insertProduct(req.body).then((response) => {
        //SUCCESS
        res.status(201).send(
            {
                responseCode: 201,
                responseMessage: constants.responseMessages.Success,
                data: {
                    result: response
                }
            }
        )
    }).catch((error) => {
        //ERROR
        res.status(500).send(
            {
                responseCode: 500,
                responseMessage: error.message
            }
        )
    });
});


/**
 * @api {delete} /admin/product/:id Deletes a product
 * @apiGroup Admin
 * @apiName Delete Product
 * @apiParam {id} Product ID
 * @apiSuccessExample {json} Success
 *        {
 *          "responseCode": 201,
 *             "responseMessage": "Success",
 *             "data": {
 *                  "result": "Successfully removed product"
 *             }
 *          }
 * @apiErrorExample {json} List error
 *    HTTP/1.1 503 Internal Server Error
 */

router.delete("/product/:id", function (req, res) {
    db_delete.deleteProduct(req.params.id).then((response) => {
        //SUCCESS
        res.status(201).send(
            {
                responseCode: 201,
                responseMessage: constants.responseMessages.Success,
                data: {
                    result: response
                }
            }
        )
    }).catch((error) => {
        //ERROR
        res.status(500).send(
            {
                responseCode: 500,
                responseMessage: error.message
            }
        )
    });
});


/**
 * @api {put} /admin/product/:id Updates a product
 * @apiGroup Admin
 * @apiName Update Product
 * @apiParam {id} Product ID
 *   @apiParamExample {json} Input
 *{
 *    "title" : "White Rock Himalayan Salt Lampp",
 *    "banner_img_url" : "Img5",
 *      "description" : "100% Natural Himalayan white rock salt from the mines Of Khewra (Pakistan)Wrapped in plastic, packed in carton box with lamp wire and 120 watt bulb",
 *      "price" : "4500",
 *      "short_title_description" : "Available in all four colors",
 *      "product_images" : ["product1_img1", "product1_img2" , "t"],
 *      "weight" : [2, 3, 4, 6, 7, 8, 9, 10],
 *      "color" : ["White" , "Black"],
 *      "category" : "1",
 *      "rating" : 5
 *}
 * @apiSuccessExample {json} Success
 *        {
 *          "responseCode": 201,
 *             "responseMessage": "Success",
 *             "data": {
 *                  "result": "Successfully updated product"
 *             }
 *          }
 * @apiErrorExample {json} List error
 *    HTTP/1.1 503 Internal Server Error
 */
router.put("/product/:id", function (req, res) {
    db_update.updateProduct(req.params.id, req.body).then((response) => {
        //SUCCESS
        res.status(201).send(
            {
                responseCode: 201,
                responseMessage: constants.responseMessages.Success,
                data: {
                    result: response
                }
            }
        )
    }).catch((error) => {
        //ERROR
        res.status(500).send(
            {
                responseCode: 500,
                responseMessage: error.message
            }
        )
    });
});


/**
 * @api {post} /email/send-message Send message
 * @apiGroup Email
 * @apiParamExample {json} Input
 *{
 *  "email" : "ali@gmail.com",
 *   "name" :  "ali",
 *   "message" : "Please Contact me!"
}
 *
 *  }
 * @apiSuccessExample {json} Success
 *         {
 *            "responseCode": 200,
 *              "responseMessage": "Success",
 *              "data": {
 *                  "result": Success
 *              }
 *          }
 * @apiErrorExample {json} Update error
 *    HTTP/1.1 500 Internal Server Error
 */



module.exports = router;

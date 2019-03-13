let express = require('express'),
    router = express.Router(),
    constants = require('../utils/constant'),
    db_read = require('../db-functions/read'),
    utilsFunction = require('../utils/functions');


////////////////////////////////////////////////////  CONTACT  /////////////////////////////////////////////////////////////


// POST

/**
 * @api {post} /email/subscribe Subscribe to email updates
 * @apiGroup Email
 *  * @apiParamExample {json} Input
 *{
 *	"email" : "email@example.com"
 *  }
 * @apiSuccessExample {json} Success
 *         {
 *            "responseCode": 201,
 *              "responseMessage": "Success",
 *              "data": {
 *                  "result": Success
 *              }
 *          }
 * @apiErrorExample {json} Update error
 *    HTTP/1.1 500 Internal Server Error
 */

router.get("/", function (req, res) {
    db_read.getContactDetails().then((response) => {
        //SUCCESS
        res.status(200).send(
            {
                responseCode: 200,
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



module.exports = router;

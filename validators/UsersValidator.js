const { check } = require('express-validator');
const checkErrors = require('./result');

const create = [
    check("firstName").isAlpha(),
    check("lastName").isAlpha(),
    check("email").isEmail(),
    check('password').isLength({min: 3}),
    checkErrors
];

const getOne = [
    check("userId").isMongoId().withMessage("You have to provide a valid MongoId"),
    checkErrors
];

module.exports = {
    create,
    getOne
};
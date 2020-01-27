const { check } = require('express-validator');
const checkErrors = require('./result');

const login = [
    check("email").isEmail(),
    check('password').isLength({min: 3}),
    checkErrors
];

const register = [
    check("firstName").isAlpha(),
    check("lastName").isAlpha(),
    check("email").isEmail(),
    check('password').isLength({min: 3}),
    // check('passwordConfirm').matches('password'),
    checkErrors
];

module.exports = {
    login,
    register
};
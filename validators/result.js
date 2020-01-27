const { validationResult } = require("express-validator");

const checkErrors = (req, res, next) => {
    // Check validator
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.json({
            success: false,
            errors: errors.array()
        });
    }

    next();
};

module.exports = checkErrors;
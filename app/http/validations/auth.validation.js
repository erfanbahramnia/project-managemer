const { body } = require("express-validator");
const UserModel = require("../../models/user.model");

function registerValidator() {
    // console.log("auth.validation.js");
    return [
        body("username").notEmpty().isLength({min: 4, max: 25}).custom(async (value, context) => {
            if (value) {
                const checkUsername = /^[a-z]+[a-z0-9\.\_]{2,}/gi
                if (checkUsername.test(value)) {
                    const user = await UserModel.findOne({username: value});
                    if (user) throw `username: ${user.username} is already in used!`;
                    return true;
                };
                throw "username is not valid";
            }
            else throw "Username is empty";
        }),
        body("email").isEmail().withMessage("Please enter a valid email address").custom(async email => {
            const user = await UserModel.findOne({email});
            if (user) throw `email: ${user.email} is already in used!`; 
            return true;
        }),
        body("mobile").isMobilePhone("fa-IR").withMessage("Please enter a valid mobile phone number").custom(async mobile => {
            const user = await UserModel.findOne({mobile});
            if (user) throw `mobile: ${user.mobile} is already in used!`; 
            return true;
        }),
        body("password").isLength({min: 6, max: 16}).withMessage("Password must be at more than 6 characters and smaller than 16 characters")
        .custom((value, ctx) => {
            if (!value) throw "password is empty"
            if (value !== ctx?.req?.body?.confirm_password) throw "password is not corresponding to confirm_password";
            return true;
        }),
    ];
};

module.exports = {
    registerValidator,
};
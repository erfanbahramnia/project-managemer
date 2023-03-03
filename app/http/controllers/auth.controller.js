const UserModel = require("../../models/user.model.js"); 
const { hashString } = require("../../modules/functions.js");

class AuthController {
    async register(req, res, next) {
        try {
            const { username, password, email, mobile} = req.body;
            const hash_password = hashString(password);
            const user = await UserModel.create({
                username, password: hash_password, email, mobile
            })
            // .catch(err => {
            //     // if (err.code === 11000) {
            //     //     throw {status: 400, message: `${Object.keys(err.keyValue)}: ${Object.values(err.keyValue)} is already registered`};
            //     // };
            // })
            return res.json(user);
        } catch (error) {
            next(error)
        }
    }

    login() {

    }

    resetPassword() {

    }

    
};

module.exports = {
    AuthController: new AuthController(),
};
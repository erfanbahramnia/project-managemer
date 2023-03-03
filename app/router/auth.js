const router = require("express").Router();
const { AuthController } = require("../http/controllers/auth.controller");
const { registerValidator } = require("../http/validations/auth.validation");
const { expressValidatorMapper } = require("../http/middlewares/checkErrors.js")

router.post("/register", registerValidator(), expressValidatorMapper, AuthController.register, (req, res, next) => {
    console.log("auth.js");
})

module.exports = {
    authRoutes: router,
};
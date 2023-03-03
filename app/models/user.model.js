const mongoose = require("mongoose");
const UserSchema = require("../schemas/user.schema.js");
const UserModel = mongoose.model("user", UserSchema);
module.exports = UserModel;
const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
    first_name: {type: String},
    last_name: {type: String},
    username: {type: String, required: true, unique: true},
    mobile: {type: String, required: true, unique: true},
    roles: {type: [String], default: ["user"]},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    skills: {type: [String], default: []},
    teams: {type: [mongoose.Types.ObjectId], default: []},
}, {
    timestamps: true
});
module.exports = UserSchema;  
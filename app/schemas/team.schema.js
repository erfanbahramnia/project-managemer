const mongoose = require("mongoose");
const TeamSchema = new mongoose.Schema({
    name: {type: String, required: true},
    description: {type: String},
    users: {type: [mongoose.Types.ObjectId], default: []},
    owner: {type: mongoose.Types.ObjectId, required: true},
}, {
    timestamps: true
});
module.exports = TeamSchema;  
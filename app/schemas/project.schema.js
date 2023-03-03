const mongoose = require("mongoose");
const ProjectSchema = new mongoose.Schema({
    title: {type: String, required: true},
    text: {type: String},
    image: {type: string, default: '/defaults/default.jpg'},
    owner: {type: mongoose.Types.ObjectId, required: true},
    team: {type: mongoose.Types.ObjectId},
    private: {type: Boolean, required: true},
}, {
    timestamps: true
});
module.exports = ProjectSchema;  
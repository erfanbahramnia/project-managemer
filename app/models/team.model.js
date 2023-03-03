const mongoose = require("mongoose");
const TeamSchema = require("../schemas/team.schema.js");
const TeamModel = mongoose.model("team", TeamSchema);
module.exports = TeamModel;
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const team = new Schema({
    name: {type: String},
    descripcion: {type: String}
});
module.exports = mongoose.model("teams", team);
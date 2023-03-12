const express = require("express");
const app = express();
//const bodyPaser = require("body-parser");
const res = require("express/lib/response");
//app.use(bodyPaser.json());
const mongoose = require("mongoose");
const db = mongoose.connect("mongodb+srv://admin:admin123@cluster0.is2x79s.mongodb.net/test");
const TeamModel = require("./models/team")
app.listen(3000, ()=> console.log("Example app listening on port 3000!"))


app.get("/teams", function (req, res) {
    res.json({
        "teams" : ["Quatar", "España", "Costa Rica", "Ecuador", "Estados Unidos", "Argentina", "Arabia Saudi", "Alemania", "Japon", "Mexico"]
    })
});
 app.post("/teams", function (req, res) {
    const team = new TeamModel();
 });

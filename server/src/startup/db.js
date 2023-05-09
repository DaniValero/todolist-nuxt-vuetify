
const mongoose = require('mongoose')
const config = require("config");




module.exports = function () {
    mongoose
    .connect(config.get("db"), {useUnifiedTopology: true}) 
    .then(() => console.log("Conectado a MongoDB"))
}
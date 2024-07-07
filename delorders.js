const mongoose = require("mongoose")

const deltSch = new mongoose.Schema({
    Tnam:String,
    Onam:String,
    Reid:String,
    qut:Number,
})

const delotMod = mongoose.model("delorders", deltSch)
module.exports = delotMod
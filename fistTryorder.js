const mongoose = require("mongoose")

const fistSch = new mongoose.Schema({
    Tnam:String,
    Onam:String,
    P:Number,
    qut:Number,
    Reid:Number,
})

const fistMod = mongoose.model("orders", fistSch)
module.exports = fistMod
const mongoose = require("mongoose")

const askbillpriSch = new mongoose.Schema({
    Tnam:String
})

const askbillpriMod = mongoose.model("askbillpri", askbillpriSch)
module.exports = askbillpriMod
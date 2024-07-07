const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const fistMod = require('./fistTryorder')
const delorders = require('./delorders')
const askbillpri = require('./askbillpri')

const app = express()
app.use(cors())
app.use(express.json()) 

mongoose.connect("mongodb+srv://dagdidushyant:dagdidushyant@clusternew.ruhx4nn.mongodb.net/fistTryorders")

app.get('/getorderT1' , (req,res) => {
    fistMod.find({Tnam : {$regex : 'T-1A'}})
    .then(orders => res.json(orders))
    .catch(err => res.json(err))
}) 
app.get('/getorderT2' , (req,res) => {
    fistMod.find({Tnam : {$regex : 'T-2A'}})
    .then(orders => res.json(orders))
    .catch(err => res.json(err))
}) 
app.get('/getorderT3' , (req,res) => {
    fistMod.find({Tnam : {$regex : 'T-3A'}})
    .then(orders => res.json(orders))
    .catch(err => res.json(err))
}) 
app.get('/getorderT4' , (req,res) => {
    fistMod.find({Tnam : {$regex : 'T-4A'}})
    .then(orders => res.json(orders))
    .catch(err => res.json(err))
}) 
app.get('/getorderT5' , (req,res) => {
    fistMod.find({Tnam : {$regex : 'T-5A'}})
    .then(orders => res.json(orders))
    .catch(err => res.json(err))
}) 
app.get('/getorderT6' , (req,res) => {
    fistMod.find({Tnam : {$regex : 'T-6A'}})
    .then(orders => res.json(orders))
    .catch(err => res.json(err))
}) 
app.get('/getorderT7' , (req,res) => {
    fistMod.find({Tnam : {$regex : 'T-7A'}})
    .then(orders => res.json(orders))
    .catch(err => res.json(err))
}) 
app.get('/getorderT8' , (req,res) => {
    fistMod.find({Tnam : {$regex : 'T-8A'}})
    .then(orders => res.json(orders))
    .catch(err => res.json(err))
}) 
app.get('/getorderT9' , (req,res) => {
    fistMod.find({Tnam : {$regex : 'T-9A'}})
    .then(orders => res.json(orders))
    .catch(err => res.json(err))
}) 
app.get('/getorderT10' , (req,res) => {
    fistMod.find({Tnam : {$regex : 'T-10A'}})
    .then(orders => res.json(orders))
    .catch(err => res.json(err))
}) 
app.get('/getorderT1B' , (req,res) => {
    fistMod.find({Tnam : {$regex : 'T-1B'}})
    .then(orders => res.json(orders))
    .catch(err => res.json(err))
}) 
app.get('/getorderT2B' , (req,res) => {
    fistMod.find({Tnam : {$regex : 'T-2B'}})
    .then(orders => res.json(orders))
    .catch(err => res.json(err))
}) 
app.get('/getorderT3B' , (req,res) => {
    fistMod.find({Tnam : {$regex : 'T-3B'}})
    .then(orders => res.json(orders))
    .catch(err => res.json(err))
}) 
app.get('/getorderT4B' , (req,res) => {
    fistMod.find({Tnam : {$regex : 'T-4B'}})
    .then(orders => res.json(orders))
    .catch(err => res.json(err))
}) 
app.get('/getorderT5B' , (req,res) => {
    fistMod.find({Tnam : {$regex : 'T-5B'}})
    .then(orders => res.json(orders))
    .catch(err => res.json(err))
}) 
app.get('/getorderT6B' , (req,res) => {
    fistMod.find({Tnam : {$regex : 'T-6B'}})
    .then(orders => res.json(orders))
    .catch(err => res.json(err))
}) 
app.get('/getorderT7B' , (req,res) => {
    fistMod.find({Tnam : {$regex : 'T-7B'}})
    .then(orders => res.json(orders))
    .catch(err => res.json(err))
}) 
app.get('/getorderT8B' , (req,res) => {
    fistMod.find({Tnam : {$regex : 'T-8B'}})
    .then(orders => res.json(orders))
    .catch(err => res.json(err))
}) 
app.get('/getorderT9B' , (req,res) => {
    fistMod.find({Tnam : {$regex : 'T-9B'}})
    .then(orders => res.json(orders))
    .catch(err => res.json(err))
}) 
app.get('/getorderT10B' , (req,res) => {
    fistMod.find({Tnam : {$regex : 'T-10B'}})
    .then(orders => res.json(orders))
    .catch(err => res.json(err))
}) 

app.post('/orders', (req , res)=> {
    fistMod.create(req.body)
    .then(orders => res.json(orders))
    .catch(err => res.json(err))
})

app.delete('/getDelorder/:id', async (req , res)=> {
    const id = req.params.id
    const datt = await fistMod.deleteOne({_id : id})
    res.send({datt: datt})
})

app.put('/getUpdate/:id', async (req , res)=> {
    const id = req.params.id
    fistMod.findByIdAndUpdate({_id:id} , {
        qut:req.body.changequt
    })
    .then(orders => res.json(orders))
    .catch(err => res.json(err))
})

app.post('/delorders', (req , res)=> {
    delorders.create(req.body)
    .then(delOrders => res.json(delOrders))
    .catch(err => res.json(err))
})
app.post('/ReqTable', (req , res)=> {
    askbillpri.create(req.body)
    .then(askpri => res.json(askpri))
    .catch(err => res.json(err))
})
app.get('/order' , (req,res) => {
    fistMod.find()
    .then(orders => res.json(orders))
    .catch(err => res.json(err))
}) 

app.listen(5000, () => {
    console.log("start phone")
})
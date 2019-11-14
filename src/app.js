const express = require("express")
const mongoose = require("mongoose")
const app = express()


// mongoose.connect("mongodb://localhost:27017/reprograma", { useNewUrlParser: true });
// let db = mongoose.connection;
// db.on('error', console.log.bind(console, 'connection error: '))
// db.once('open', function () {
//   console.log('conexão feita com sucesso.')
// })



const index = require ("./routes/index")
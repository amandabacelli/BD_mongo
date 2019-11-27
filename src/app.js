const express = require("express")
const mongoose = require("mongoose")
const index = require ("./routes/index")
const participante = require("./routes/participantesRouter")
const cursos = require("./routes/cursosRouter")
const bodyParse = require("body-parse")
const app = express()

// mongoose.connect("mongodb://localhost:27017/reprograma", { useNewUrlParser: true });
// let db = mongoose.connection;
// db.on('error', console.log.bind(console, 'connection error: '))
// db.once('open', function () {
//   console.log('conexão feita com sucesso.')
// })

app.use(bodyParse.json())
app.use("/", index)
app.use("/participante", participante)
app.use("/curso", cursos)

module.exports = app
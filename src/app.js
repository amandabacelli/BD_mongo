const express = require("express")
const mongoose = require("mongoose")
const index = require ("./routes/index")
const participantes = require("./routes/participantesRouter")
const cursos = require("./routes/cursosRouter")
const bodyParser = require("body-parser")
const app = express()
const path = require("path")

mongoose.connect("mongodb+srv://admin:admin@cluster0-9kqrs.mongodb.net/reprogramaDB", { useUnifiedTopology: true, useNewUrlParser: true});

// mongoose.connect("mongodb://localhost:27017/reprogramaDB", { useUnifiedTopology: true, useNewUrlParser: true});


let db = mongoose.connection;

db.on('error', console.log.bind(console, 'connection error: '))
db.once('open', function () {
  console.log('A conexão com o banco de dados foi feita com sucesso.')
})
app.use(bodyParser.json())
app.use("/", index)
app.use("/participantes", participantes)
app.use("/cursos", cursos)

//rota da documentação APIdoc
app.use(express.static('doc'))
app.get('/api-doc', (req,res) => {
  res.sendFile(path.join(__dirname + '/../doc/index.html'))
})


module.exports = app
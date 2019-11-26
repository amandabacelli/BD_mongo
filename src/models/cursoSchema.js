const mongoose = require("mongoose")
const participanteSchema = require("./participanteSchema")

const cursoSchema = new mongoose.Schema ({
    id: {type : Number, required : true}, //automatico
    curso: [{
        type: "BackEnd",
        type: "FrontEnd",
        type: "FullStack",
        required : true       
    }],
    local: [{
        type: "Estação Hack",
        outro: {type: String},
        required : true       
    }],
    periodo: [{
        type: "Diurno",
        type: "Integral",
        type: "Noturno",
        required : true       
    }],
    inicio_inscricao: {type : Date, required : true},
    termino_inscricao: {type : Date, required : true},
    data_inicio: {type : Date, required : true},
    data_termino: {type : Date, required : true},
    participantes: [{
        participante_id: {type: Object, required : true}
    }]
    //retornar participantes inscritas e participantes do curso, tendo em vista o resultado dos testes
})

const Cursos = mongoose.model('Cursos', cursoSchema)
module.exports = Cursos
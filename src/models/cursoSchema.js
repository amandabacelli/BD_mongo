const mongoose = require("mongoose")


const cursoSchema = new mongoose.Schema ({
    
    nomeCurso: {type: String, enum: ['BackEnd', 'FrontEnd', 'FullStack'], required : true },
    local: {type: String, enum: ['Estação Hack', 'Mercado Livre'], required : true },
    periodo: {type: String, enum: ['Diurno', 'Integral', 'Noturno'], required : true },
    inicioInscricao: {type : String, required : true},
    terminoInscricao: {type : String, required : true},
    dataInicio: {type : String, required : true},
    dataTermino: {type : String, required : true},
    participantes: [{type: mongoose.Schema.Types.ObjectId, ref: 'participanteSchema', required : false}]
    //retornar participantes inscritas e participantes do curso, tendo em vista o resultado dos testes
})

const Cursos = mongoose.model('Cursos', cursoSchema)

module.exports = Cursos
const mongoose = require("mongoose")


const cursoSchema = new mongoose.Schema ({
    
    nomeCurso: {type: String, enum: ['BackEnd', 'FrontEnd', 'FullStack']},
    local: {type: String, enum: ['Estação Hack', 'Mercado Livre']},
    periodo: {type: String, enum: ['Diurno', 'Integral', 'Noturno']},
    inicioInscricao: {type : String},
    terminoInscricao: {type : String},
    dataInicio: {type : String},
    dataTermino: {type : String},
    inscritas: [{type: mongoose.Schema.Types.ObjectId, ref: 'participanteSchema'}]
    //retornar participantes inscritas e participantes do curso, tendo em vista o resultado dos testes
})

const Cursos = mongoose.model('Cursos', cursoSchema)

module.exports = Cursos
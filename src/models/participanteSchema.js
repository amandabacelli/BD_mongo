const mongoose = require("mongoose")

const participanteSchema = new mongoose.Schema ({
    id: {type : Number, required : true}, //automatico
    nome_completo: { type: String, required : true},
    email: {type: String, required: true},
    senha_acesso: {type: String, required: true},
    confirmar_senha: {type: String, required: true},
    data_nascimento: {type : Date, required : true},
    estado_civil: [{
        type: "Casada",
        type: "Solteira",
        type: "Viúva",
        type: "Divorciada",
        required : true
    }],
    rg: {type : Number, required : true},
    cpf: {type : Number, required : true},
    telefone_residencial: {type : Number},
    telefone_celular: {type : Number, required : true},
    cep: {type : Number, required : true},
    rua: { type: String, required : true},
    numero: {type : Number, required : true},
    bairro: { type: String, required : true},
    cidade: { type: String, required : true},
    // formacao_academica: { type: String, required : true},
    formacao_academica: [{
        type: "Superior Completo",
        type: "Superior Cursando",
        type: "Ensino Médio Completo",
        required : true       
    }],
    relacaoCursos: [{
        curso_id: Object
        
    }],//estrutura normalizada - colocar situação (inscrita e aluna) condição depende do resultado do processo
  

    //informações inseridas pelo admin
    teste1: [{
        type: "Aguardando",
        type: "Aprovada",
        type: "Reprovada",
        required : true
    }],
    video_entrevista: [{
        type: "Aguardando",
        type: "Aprovada",
        type: "Reprovada",
        required : true
    }],
    entrevista: [{
        type: "Aguardando",
        type: "Aprovada",
        type: "Reprovada",
        required : true
    }],
    resultado: [{
        aprovada: Boolean,
        reprovada: Boolean,
        aguardando: Boolean
    }], //será inserido automaticamente pelo código
    
    situacao_Participante:[{
        ativa: Boolean,
        concluido: Boolean,
        desistente: Boolean
    }]
})

const Participantes = mongoose.model('Participantes', participanteSchema)
module.exports = Participantes
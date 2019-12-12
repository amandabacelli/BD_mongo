const mongoose = require("mongoose")

const processoSeletivoSchema = new mongoose.Schema ({

    //informações inseridas pelo admin
    teste: {type: String, enum: ['Aguardando', 'Aprovada', 'Reprovada']},
    videoEntrevista: {type: String, enum: ['Aguardando', 'Aprovada', 'Reprovada']},
    entrevista: {type: String, enum: ['Aguardando', 'Aprovada', 'Reprovada']},
    resultado: [{
        aprovada: Boolean,
        reprovada: Boolean,
        aguardando: Boolean
    }], //será inserido automaticamente pelo código
    
    situacaoParticipante:[{
        ativa: Boolean,
        concluido: Boolean,
        desistente: Boolean
    }]
})

const ProcessoSeletivo = mongoose.model('ProcessoSeletivo', processoSeletivoSchema)
module.exports = ProcessoSeletivo
const mongoose = require("mongoose")

const participanteSchema = new mongoose.Schema ({

    //informações inseridas pelo admin
    teste1: {type: String, enum: ['Aguardando', 'Aprovada', 'Reprovada'], required : false },
    videoEntrevista: {type: String, enum: ['Aguardando', 'Aprovada', 'Reprovada'], required : false },
    entrevista: {type: String, enum: ['Aguardando', 'Aprovada', 'Reprovada'], required : false },
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

const ProcessoSeletivo = mongoose.model('ProcessoSeletivo', participanteSchema)
module.exports = ProcessoSeletivo
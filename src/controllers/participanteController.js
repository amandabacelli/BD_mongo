const Participantes = require("../models/participanteSchema")
const Cursos = require("../models/cursoSchema")
const Mongoose = require("mongoose")

//POST--------------------------------------------------------------------------------------------------------------------
exports.post = (req, res) => {
    let participante = new Participantes(req.body)
    participante.save(function (err) {
        if (err) {
            return res.status(500).send(err)
        }
        return res.status(201).send({
            status: "true",
            mensagem: "Participante cadastrada com sucesso"
        })
    })
}
//GET--------------------------------------------------------------------------------------------------------------------
exports.get = async (req, res) => {
    let participantes = await Participantes.find()
    res.status(200).send(participantes)

}

exports.getNome = async (req, res, next) => {
    try {
        const nomeCompleto = req.params.nomeCompleto
        const response = await Participantes.findOne({ nomeCompleto })
        res.status(200).send(response)
    } catch (e) {
        return res.status(400).send({
            mensagem: "Participante não encontrada",
            data: e
        })

    }
}

exports.getByID = (req, res) => {
    const participanteId = req.params.id
    Participantes.findById(participanteId, function (err, participante) {
        if (err) return res.status(500).send(err)
        if (!participante) {
            return res.status(200).send({ message: `Participante  não encontrada` })
        }
        res.status(200).send(participante)
    })

}

exports.deleteParticipante = (req, res, next) => {
    try {
        const participanteId = req.params.id
        console.log(participanteId)
        const response = Participantes.findById(participanteId)
        console.log(response)
        response.remove(function (error) {
            if (!error) {
                res.status(200).send({ mensagem: `Participante foi removida com sucesso ` })
            }
        })

    } catch (error) {
        return res.status(500).send({ mensagem: Error })

    }
}

exports.atualizarProcesso = async (req, res, next) =>{
    const participanteId = req.params.participanteId
    const processoId = req.params.processoId
    Participantes.findOne({participanteId}, function(err, participante){
        if (err) {
            res.status(404).send({ message: "participante não encontrada" })
            return
        } else {
            const updateProcesso = {$set: {}}

            for(let param in req.body){
                updateProcesso.$set['resultadosProcesso.$.' + param] = req.body[param]
                //posicao na array [resultadoprocessos...]
            }
            //transforma o set em dinamico, podendo variar conforme o q ser enviado no body. Ajustar oq estou mandando no body e salvar no banco
            Participantes.update(
                {'resultadosProcesso._id':processoId},
                updateProcesso,
                {upsert:true},
                function (err) {
                    if (err) return res.status(500).send({ message: err });
                    res.status(200).send({ message: "Processo atualizado" })
                }
            )
        }
    })
}

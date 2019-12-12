const Participantes = require("../models/participanteSchema")
const Cursos = require("../models/cursoSchema")

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


exports.atualizarProcesso = async (req, res, next) => {
    try {
        const processoId = req.params.processoId
        console.log('processoId', processoId)
        const participanteId = req.params.participanteId
        const participante = await Participantes.findById(participanteId)
        console.log('participante', participanteId)
        const status = req.body
        console.log('status', status)s
        let numProcesso = await participante.resultadosProcesso
        console.log('array ID processos', numProcesso)
        // const atualizar = await Participantes.findById(processoId)
        // atualizar.resultadosProcesso.push()

        numProcesso.forEach(async function (item) {
            if (item._id == processoId) {
                // await Participantes.updateOne(
                //     { resultadosProcesso: {item}},
                //     { $set: status },
                //     { upsert: false }
                // )
                item.teste = status.teste
                item.videoEntrevista = status.videoEntrevista
                item.entrevista = status.entrevista
                console.log('item', item)
            }
        })
        res.status(200).send({ mensagem: "Inserido com sucesso" })

    } catch (error) {
        console.log(error)
        return res.status(500).send({ mensagem: Error })
    }
}

// exports.atualizarProcesso = async (req, res, next) => {
//     try {
//         const cursoId = req.params.cursoId
//         const curso = await Cursos.findById(cursoId)
//         console.log('curso', curso)
//         const participanteId = req.params.participanteId
//         console.log('participante', participanteId)
//         const processo = req.body
//         console.log('processo', processo)
//         const dados = { ...processo, curso : curso}
//         console.log('dados',dados)

        // await Participantes.findByIdAndUpdate(participanteId,
        //     { $push: { resultadosProcesso: dados }},
        // )
//         res.status(200).send({ mensagem: "Inserido com sucesso" })

//     } catch (error) {
//         console.log(error)
//         return res.status(500).send({ mensagem: Error })
//     }
// }

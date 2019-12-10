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

exports.getNome = async (req,res, next) => {
    try {
        const nomeCompleto = req.params.nomeCompleto
        const response = await Participantes.findOne({nomeCompleto})
        res.status(200).send(response)
    }catch (e) {
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

//PUT------------------------------------------------------------------------------------------------------------------

     
       
// exports.inscricaoCurso = (req, res) => {
//     Participantes.findByIdAndUpdate(
//         { _id: req.params.id },
//         { $set: req.body },
//         { upsert: true },
//         function (err) {
//             if (err) return res.status(500).send({ mensagem: err })
//             res.status(200).send({ mensagem: "Atualizado com sucesso" })
//         }
//     )
// }
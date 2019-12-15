const Cursos = require("../models/cursoSchema")
const Participantes = require("../models/participanteSchema")

exports.post = (req, res) => {
    let curso = new Cursos(req.body)
    curso.save()
        .then(() => {
            return res.status(201).send({
                mensagem: "Curso cadastrado com sucesso"
            })
        }).catch((err) => {
            return res.status(500).send(err)
        })
}
exports.get = async (req, res) => {
    let cursos = await Cursos.find()
    return res.status(200).send(cursos);
}

exports.getCursoNome = async (req, res) => {
    try {
        const nomeCurso = req.params.nomeCurso
        const response = await Cursos.findOne({ nomeCurso })
        res.status(200).send(response)
    } catch {
        if (!response) {
            return res.status(401).send({ mensagem: `Curso ${response} não encontrado` })
        }
    }
}

exports.getCursoId = async (req, res) => {
    const cursoId = req.params.id
    await Cursos.findById(cursoId, function (err, curso) {
        if (err) return res.status(500).send(err)
        if (!curso) {
            return res.status(200).send({ message: `Curso  não encontrado` })
        }
        res.status(200).send(curso)
    })

}

exports.putInscricaoCurso = async (req, res) => {
    try {
        const cursoId = req.params.cursoId
        console.log('curso', cursoId)
        const participanteId = req.params.participanteId
        console.log('participante', participanteId)
        await Participantes.findByIdAndUpdate(participanteId,
            { $push: { resultadosProcesso: { curso: cursoId } } }
        )
        await Cursos.findByIdAndUpdate(cursoId,
            { $push: { inscritas: participanteId } }
        )
        res.status(200).send({ mensagem: "Participante inscrita com sucesso" })


    } catch (error) {
        console.log(error)
        return res.status(500).send({ mensagem: "Inscrição não realizada" })
    }
}

exports.deleteCurso = async (req, res, next) => {
    try {
        const cursoId = req.params.id
        console.log(cursoId)
        const response = await Cursos.findById(cursoId)
        console.log(response)
        response.remove(function (error) {
            if (!error) {
                res.status(200).send({ mensagem: `Curso removido com sucesso ` })
            }
        })
    } catch (error) {
        return res.status(500).send({ mensagem: Error })

    }
}
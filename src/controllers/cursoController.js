const Cursos = require("../models/cursoSchema")
const Participantes = require("../models/participanteSchema")

exports.post = (req, res) => {
    let curso = new Cursos(req.body)
    curso.save(function (err) {
        if (err) {
            return res.status(500).send(err)
        }
        return res.status(201).send({
            status: "true",
            mensagem: "Curso cadastrado com sucesso"
        })
    })
}

exports.get = (req, res) => {
    Cursos.find(function (err, cursos) {
        if (err) res.status(500).send(err)
        res.status(200).send(cursos)
    })

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
exports.inscricaoCurso = async (req, res) => {
    try {
        const cursoId = req.params.cursoId
        console.log(cursoId)
        const participanteId = req.params.participanteId
        console.log(participanteId)
        await Participantes.findByIdAndUpdate(participanteId,  
            {$push:{cursosInscritos: cursoId}}
        )
        await Cursos.findByIdAndUpdate(cursoId, 
            {$push:{inscritas:participanteId}}
            )
        res.status(200).send({ mensagem: "Inserido com sucesso" })

    } catch (error) {
        console.log(error)
        return res.status(500).send({ mensagem: Error })
    }
}
// exports.inscricaoCurso = async (req, res) => {
//     Cursos.findByIdAndUpdate(idDoCurso, curso.Participantes.push())

//     const {nomeCurso, local, periodo} = req.body
//     console.log(req.body)
//     const inscreverCurso = new Cursos({
//         nomeCurso, local, periodo, inscritas: req.params.participanteId,
//     })
//     console.log(req.params.participanteId)
//     inscreverCurso.save()
//     try {
//        await Participantes.findOneAndUpdate({_id: req.params.participanteId}, {$push: {cursosInscritos: inscreverCurso}})
//        res.status(200).send({ mensagem: "Inserido com sucesso" })

//    } catch (error) {
//     return res.status(500).send({ mensagem: Error })
//    }
// }

// exports.inscricaoCurso2 = async (req, res, next) => {
//     const inscricao = new Cursos(req.body)
//     inscricao.save(function (error, inscrita){
//         try {
//             Cursos.aggregate([
//                 {
//                     $lookup: {
//                         from: "Participantes",
//                         localField: "_id",
//                         foreignField: "nomeCompleto",
//                         as: "inscritas"
//                     }
//                 }
//             ])
//             Participantes.aggregate([
//                 {
//                     $lookup: {
//                         from: "Cursos",
//                         localField: "_id",
//                         foreignField: ["nomeCompleto", "email", "telefoneCelular"],
//                         as: "cursosInscritos"
//                     }
//                 }
//             ])
//             console.log(inscrita)
//             res.status(200).send({ mensagem: "Inserido com sucesso" })

//         } catch (error) {
//             return res.status(500).send({ mensagem: Error })

//         }


//     })

// }


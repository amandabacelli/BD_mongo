const Cursos = require("../models/cursoSchema")
const Participantes = require("../models/participanteSchema")

exports.post = (req,res) => {
    let curso = new Cursos(req.body)
    curso.save(function(err){
        if(err) {
            return res.status(500).send(err)    
        }
        return res.status(201).send({
            status: "true",
            mensagem: "Curso cadastrado com sucesso"
        })
    })
}

exports.get = (req, res) => {
    Cursos.find(function(err, cursos){
        if(err) res. status(500).send(err)
        res.status(200).send(cursos)
    })

}
exports.getCurso = async (req, res) => {
    try{
        const nomeCurso = req.params.nomeCurso
        const response = await Cursos.findOne({nomeCurso})
        res.status(200).send(response)
    } catch {
        if(!response){
            return res.status(401).send({mensagem: `Curso ${response} não encontrado`})
        }
    }
}

exports.inscricaoCurso = (req, res) => {
    const {nomeCurso, local, periodo} = req.body
    console.log(req.body)
    const inscreverCurso = new Cursos({
        nomeCurso, local, periodo, participantes: req.params.participanteId,
    })
    console.log(req.params.participanteId)
    inscreverCurso.save()
    try {
       Participantes.findOneAndUpdate({_id: req.params.participanteId}, {$push: {cursosInscritos: inscreverCurso._id}})
       res.status(200).send({ mensagem: "Inserido com sucesso" })
       
   } catch (error) {
    return res.status(500).send({ mensagem: Error })
   }
}




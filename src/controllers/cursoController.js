const Cursos = require("../models/cursoSchema")

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


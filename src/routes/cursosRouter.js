const express = require("express")
const router = express.Router()
const controller = require("../controllers/cursoController")

router.post("/", controller.post)
router.get("/", controller.get)
router.get("/nome/:nomeCurso", controller.getCursoNome)
router.get("/:id", controller.getCursoId)
router.put("/:cursoId/inscricao/:participanteId", controller.inscricaoCurso)



module.exports = router
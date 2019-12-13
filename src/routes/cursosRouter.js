const express = require("express")
const router = express.Router()
const controller = require("../controllers/cursoController")

router.post("/", controller.post)
router.get("/", controller.get)
router.get("/nome/:nomeCurso", controller.getCursoNome)
router.get("/:id", controller.getCursoId)
router.put("/inscricao/:cursoId/:participanteId", controller.putInscricaoCurso)
router.delete("/:id", controller.deleteCurso)

module.exports = router
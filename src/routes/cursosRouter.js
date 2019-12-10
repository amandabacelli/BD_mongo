const express = require("express")
const router = express.Router()
const controller = require("../controllers/cursoController")

router.post("/", controller.post)
router.get("/", controller.get)
router.get("/:nomeCurso", controller.getCurso)
router.post("/inscricao/:participanteId", controller.inscricaoCurso)


module.exports = router
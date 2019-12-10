const express = require("express")
const router = express.Router()
const controller = require("../controllers/participanteController")


router.post("/", controller.post)
router.get("/", controller.get)
router.get("/:id", controller.getByID)
router.get("/nome/:nomeCompleto", controller.getNome)




module.exports = router
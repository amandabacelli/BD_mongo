const express = require("express")
const router = express.Router()
const controller = require("../controllers/participanteController")


router.post("/", controller.post)
/**
 * @api {get} /user/:id Request User information
 * @apiName GetUser
 * @apiGroup User
 *
 * @apiParam {Number} id Users unique ID.
 *
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "firstname": "John",
 *       "lastname": "Doe"
 *     }
 *
 * @apiError UserNotFound The id of the User was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "UserNotFound"
 *     }
 */
router.get("/", controller.get)
router.get("/:id", controller.getByID)
router.get("/nome/:nomeCompleto", controller.getNome)
router.put("/processoseletivo/:participanteId/:processoId", controller.atualizarProcesso)
router.delete("/:id", controller.deleteParticipante)




module.exports = router
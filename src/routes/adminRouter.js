const express = require("express")
const router = express.Router()
const controller = require("../controllers/adminController")
const authMiddleware = require("../middleware/auth")


router.post("/", controller.post)
/**
 * @api {post} /admin Cadastro de Admins
 * @apiPermission admin
 * @apiName PostAdmin
 * @apiGroup Admins
 * 
 *
 * @apiParam (Request Body) {String} nomeCompleto Nome da Admin.
 * @apiParam (Request Body) {String} email Email da Admin.
 * @apiParam (Request Body) {String} password Senha de acesso do Admin.
 * 
 * @apiSuccess {Object} Admin Admin cadastrada.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "mensagem": "Admin cadastrada com sucesso"
 *     }
 */
router.use(authMiddleware)
router.post("/auth", controller.postAuth)
/**
 * @api {post} /admin/auth Geração de Token de acesso
 * @apiPermission admin
 * @apiName TokenAutenticacao
 * @apiGroup Admins
 *
 * @apiParam (Request Body) {String} email Email da Admin.
 * @apiParam (Request Body) {String} password Senha de acesso do Admin.
 * 
 * @apiSuccess {Object} Admin Admin cadastrada.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "user": {},
 *       "token": "tokengerado"
 * 
 *     }
 * @apiError Error Digitar senha incorreta.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "senha incorreta"
 *     }
 */

router.get("/", controller.get)
/**
* @api {get} /admin Listar Admins cadastradas
* @apiPermission admin
* @apiName Get
* @apiGroup Admins
*
* @apiSuccessExample Success-Response:
*     HTTP/1.1 200 OK
*     {
*      "_id": "5df54d031d0e803a50fe8141",
*      "nome": "Exemplo de Admin",
*      "email": "exemplo@exemplo.com.br",
*      "senha": "$2a$10$Nhs2GquEHPp/kcP/NDu.d.ZgBEVcHVeGVtR0MIGTWL1eBZa4sGYwe",
*      "__v": 0
*     }
*/

module.exports = router
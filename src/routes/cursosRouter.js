const express = require("express")
const router = express.Router()
const controller = require("../controllers/cursoController")
const authMiddleware = require("../middleware/auth")

router.get("/", controller.get)
/**
* @api {get} /cursos Listar todos os Cursos cadastrados
* @apiName Get
* @apiGroup Cursos
*
* @apiSuccessExample Success-Response:
*     HTTP/1.1 200 OK
*     {
*     "inscritas": [],
        "_id": "5df55a1d9e71e33a70f10562",
        "nomeCurso": "BackEnd",
        "local": "Mercado Livre",
        "periodo": "Noturno",
        "inicioInscricao": "02/06/2019",
        "terminoInscricao": "02/07/2019",
        "dataInicio": "10/08/2019",
        "dataTermino": "23/11/2019",
        "__v": 0
*     }
*/
router.get("/nome/:nomeCurso", controller.getCursoNome)
/**
* @api {get} /cursos/nome/:nomeCurso Listar o Curso cadastrado por nome
* @apiName Get
* @apiGroup Cursos
*
* @apiSuccessExample Success-Response:
*     HTTP/1.1 200 OK
*     {
*     "inscritas": [],
        "_id": "5df55a1d9e71e33a70f10562",
        "nomeCurso": "BackEnd",
        "local": "Mercado Livre",
        "periodo": "Noturno",
        "inicioInscricao": "02/06/2019",
        "terminoInscricao": "02/07/2019",
        "dataInicio": "10/08/2019",
        "dataTermino": "23/11/2019",
        "__v": 0
*     }
*/
router.get("/:id", controller.getCursoId)
/**
* @api {get} /cursos/:id Listar o Curso cadastrado por ID
* @apiName Get
* @apiGroup Cursos
*
* @apiSuccessExample Success-Response:
*     HTTP/1.1 200 OK
*     {
*     "inscritas": [],
        "_id": "5df55a1d9e71e33a70f10562",
        "nomeCurso": "BackEnd",
        "local": "Mercado Livre",
        "periodo": "Noturno",
        "inicioInscricao": "02/06/2019",
        "terminoInscricao": "02/07/2019",
        "dataInicio": "10/08/2019",
        "dataTermino": "23/11/2019",
        "__v": 0
*     }
*/
router.put("/inscricao/:cursoId/:participanteId", controller.putInscricaoCurso)
/**
 * @api {put} /cursos/inscricao/:cursoId/:participanteId Inscricao de participante no curso
 * @apiName Put
 * @apiGroup Cursos
 *
 * @apiParam {String} cursoId ID do curso em que será feita a inscrição.
 * @apiParam {String} participanteId ID da participante que será inscrita.
 * 
 * @apiSuccess {String[]} resultadosProcesso Processo de inscrição da participante iniciado.
 * @apiSuccess {String[]} inscritas Participante inscrita no curso.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "mensagem": "Participante inscrita com sucesso" 
 * 
 *     }
 * @apiError Error Curso ou participante não encontrada.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "mensagem": "Inscrição não realizada"
 *     }
 */

router.use(authMiddleware)
router.post("/", controller.post)
/**
 * @api {post} /cursos Cadastro de Cursos
 * @apiPermission admin
 * @apiName Post
 * @apiGroup Cursos
 *
 * @apiParam (Request Body) {String} nomeCurso Nome do Curso.
 * @apiParam (Request Body) {String} local Local de realizacao do Curso.
 * @apiParam (Request Body) {String} periodo Período de realizacao do Curso.
 * @apiParam (Request Body) {String} inicioInscricao Data do inicio da inscricao do Curso.
 * @apiParam (Request Body) {String} terminoInscricao Data do termino da inscricao do Curso.
 * @apiParam (Request Body) {String} dataInicio Data de inicio do Curso.
 * @apiParam (Request Body) {String} dataTermino Data de termino do Curso.
 * 
 *
 * @apiSuccess {Object} Curso Curso cadastrado.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "mensagem": "Curso cadastrado com sucesso"
 *     }
 */

router.delete("/:id", controller.deleteCurso)
/**
 * @api {delete} /cursos/:id Remover curso
 * @apiPermission admin
 * @apiName Delete
 * @apiGroup Cursos
 *
 * @apiParam {String} cursoId ID do curso que será removido.
 * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "mensagem": "Curso removido com sucesso" 
 * 
 *     }
 * @apiError Error Curso não encontrado.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "mensagem": "Error"
 *     }
 */

module.exports = router
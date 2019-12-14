const express = require("express")
const router = express.Router()
const controller = require("../controllers/participanteController")
const authMiddleware = require("../middleware/auth")


router.post("/", controller.post)
/**
 * @api {post} /participantes Cadastro de Participantes
 * @apiName Post
 * @apiGroup Participantes
 *
 * @apiParam (Request Body) {String} nomeCompleto Nome completo da Participante.
 * @apiParam (Request Body) {String} email Email da Participante.
 * @apiParam (Request Body) {String} dataNascimento Data de nascimento da Participante.
 * @apiParam (Request Body) {String} estadoCivil Estado civil ['Casada', 'Solteira', 'Viúva', 'Divorciada'] da Participante.
 * @apiParam (Request Body) {Number} rg Numero do RG da Participante.
 * @apiParam (Request Body) {Number} cpf Numero do CPF da Participante.
 * @apiParam (Request Body) {Number} telefoneResidencial Numero do telefone residencial da Participante.
 * @apiParam (Request Body) {Number} telefoneCelular Numero do telefone celular da Participante.
 * @apiParam (Request Body) {Number} cep Numero do CEP da Participante.
 * @apiParam (Request Body) {String} rua Rua da residencia da Participante.
 * @apiParam (Request Body) {Number} numero Numero da residencia da Participante.
 * @apiParam (Request Body) {String} bairro Bairro da residencia da Participante.
 * @apiParam (Request Body) {String} cidade Cidade da residencia da Participante.
 * @apiParam (Request Body) {String} estado Estado da residencia da Participante.
 * @apiParam (Request Body) {String} formacaoAcademica Formacao academica ['Superior Completo', 'Superior Cursando', 'Ensino Médio Completo'] da Participante .
 * 
 * @apiSuccess {Object} Participante Participante cadastrada.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "mensagem": "Participante cadastrada com sucesso"
 *     }
 */


router.get("/:id", controller.getByID)
/**
* @api {get} /participantes/:id Listar a Participante cadastrada
* @apiName Get
* @apiGroup Participantes
*
* @apiSuccessExample Success-Response:
*     HTTP/1.1 200 OK
*      {
        "_id": "5df39d375b305d3298e820b4",
        "nomeCompleto": "teste inscritas",
        "email": "kamillylouisefogaca_@jonasmartinez.com",
        "dataNascimento": "18/08/1996",
        "estadoCivil": "Solteira",
        "rg": 305924758,
        "cpf": 60110719883,
        "telefoneResidencial": 1939320015,
        "telefoneCelular": 19983253194,
        "cep": 13460970,
        "rua": "Rua Rio Branco",
        "numero": 468,
        "bairro": "Centro",
        "cidade": "Nova Odessa",
        "estado": "SP",
        "formacaoAcademica": "Superior Cursando",
        "resultadosProcesso": [
            {
                "_id": "5df3a053e61c9a24ac308060",
                "curso": "5df39495da77b9323846c551"
            }
    }
*/
router.get("/nome/:nomeCompleto", controller.getNome)
/**
* @api {get} /participantes/:nomeCompleto Listar a Participante cadastrada
* @apiName Get
* @apiGroup Participantes
*
* @apiSuccessExample Success-Response:
*     HTTP/1.1 200 OK
*      {
        "_id": "5df39d375b305d3298e820b4",
        "nomeCompleto": "teste inscritas",
        "email": "kamillylouisefogaca_@jonasmartinez.com",
        "dataNascimento": "18/08/1996",
        "estadoCivil": "Solteira",
        "rg": 305924758,
        "cpf": 60110719883,
        "telefoneResidencial": 1939320015,
        "telefoneCelular": 19983253194,
        "cep": 13460970,
        "rua": "Rua Rio Branco",
        "numero": 468,
        "bairro": "Centro",
        "cidade": "Nova Odessa",
        "estado": "SP",
        "formacaoAcademica": "Superior Cursando",
        "resultadosProcesso": [
            {
                "_id": "5df3a053e61c9a24ac308060",
                "curso": "5df39495da77b9323846c551"
            }
    }
*/
router.use(authMiddleware)
router.get("/", controller.get)
/**
* @api {get} /participantes Listar todas Participantes cadastradas
* @apiPermission admin
* @apiName Get
* @apiGroup Participantes
*
* @apiSuccessExample Success-Response:
*     HTTP/1.1 200 OK
*   {
        "_id": "5df39d375b305d3298e820b4",
        "nomeCompleto": "teste inscritas",
        "email": "kamillylouisefogaca_@jonasmartinez.com",
        "dataNascimento": "18/08/1996",
        "estadoCivil": "Solteira",
        "rg": 305924758,
        "cpf": 60110719883,
        "telefoneResidencial": 1939320015,
        "telefoneCelular": 19983253194,
        "cep": 13460970,
        "rua": "Rua Rio Branco",
        "numero": 468,
        "bairro": "Centro",
        "cidade": "Nova Odessa",
        "estado": "SP",
        "formacaoAcademica": "Superior Cursando",
        "resultadosProcesso": [
            {
                "_id": "5df3a053e61c9a24ac308060",
                "curso": "5df39495da77b9323846c551"
            }
    }
*/
router.put("/processoseletivo/:processoId", controller.putAtualizarProcesso)
/**
 * @api {put} /participates/processoseletivo/:processoId Atualizar status do processo seletivo por participante
 * @apiPermission admin
 * @apiName Put
 * @apiGroup Participantes
 *
 * @apiParam {String} processoId ID do processo iniciado em que será feita a atualização.
 * 
 * @apiSuccess {Object} resultadosProcesso Processo de inscrição da participante atualizado.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "mensagem": "Processo atualizado" 
 * 
 *     }
 * @apiError Error Processo não encontrada.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "mensagem": "Erro"
 *     }
 */
router.delete("/:id", controller.deleteParticipante)
/**
 * @api {delete} /participantes/:id Remover participante
 * @apiPermission admin
 * @apiName Delete
 * @apiGroup Partipantes
 *
 * @apiParam {String} participanteID ID da participante que será removida.
 * 
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "mensagem": "Participante foi removida com sucesso" 
 * 
 *     }
 * @apiError Error Participante não encontrada.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "mensagem": "Error"
 *     }
 */




module.exports = router
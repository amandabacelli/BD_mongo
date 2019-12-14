const Admin = require("../models/adminSchema")
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const authConfig = require('../config/auth')

function checkPassword(passwordEntry, password) {
    console.log(passwordEntry, 'senha admin')
    console.log(password, 'senha salva bd')
    return bcrypt.compare(passwordEntry, password)
}
exports.post = async (req, res) => {
    let admin = new Admin(req.body)
    admin.save()
        .then(() => {
            return res.status(201).send({
               mensagem: "Admin cadastrada com sucesso"
            })
                .catch((error) => {
                    return res.status(500).send(error)
                })

        })
}
exports.postAuth = async (req, res) => {
    const { email, password} = req.body
    
    const user = await Admin.find({email})

    if (!user) {
        return res.status(401).send({ error: 'Admin não encontrado' })
    }
    
    const { id, name } = user

    try {
        checkPassword(password, user.password)
    } catch (err) {
        return res.status(401).send({ error: 'senha incorreta' })
    }

    try {
        return res.json({
            user: {
                id,
                name,
            },
            token: jwt.sign({ id }, authConfig.secret,
            {
                expiresIn: authConfig.expiresIn
            }),
        })
    } catch (err) {
        return res.status(401).send({ error: err })
    }
}  

exports.get = async(req,res) => {
    let admins = await Admin.find()
    res.status(200).send(admins)
}
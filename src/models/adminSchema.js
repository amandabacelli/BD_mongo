const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")

const adminSchema = new mongoose.Schema({
    nomeCompleto: {type: String, required: true },
    email:{ type: String, required: true },
    password: { type: String, required: true }
})
adminSchema.pre('save', async function(next) {
    const hashPass = await bcrypt.hash(this.password, 3)
    this.password = hashPass
    next()
})

const Admin = mongoose.model('Admin', adminSchema)
module.exports = Admin
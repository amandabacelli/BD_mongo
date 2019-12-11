const app = require("./src/app")
const PORT = process.env.PORT || 3003

app.listen(PORT, function(){
    console.log(`A aplicação está rodando em localhost porta ${PORT}`)

})


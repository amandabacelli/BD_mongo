const app = require("./src/app")
const porta = 3003

app.listen(porta, function(){
    console.log(`A aplicação está rodando em localhost porta ${porta}`)

})


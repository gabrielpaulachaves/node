//mostrando arquivos .html no servidor
const express = require("express")
const app = express()

app.get("/", (req, res)=>{
    res.sendFile(__dirname + "/html/index.html") //usando __dirname para nao dar erro e retornar o diretorio raiz. evita erros futuros
    //ou seja, vai pegar o caminho desde o C\ até o caminho do html
})

app.get("/sobre", (req, res)=>{
    res.sendFile(__dirname + "/html/sobre.html")
})

app.listen(3333)
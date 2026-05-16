const express = require("express")
const app = express()
//aprendendo parametros (rotas dinamicas)

app.get("/", (req, res)=>{
    res.send("servidor aberto")
})

//para criar um parametro, utilize /: após a rota definida
app.get("/oi/:nome/:cargo", (req, res)=>{
    //res.send(req.params)
    /*resultado {
  "nome": "gabriel",
  "cargo": "dev"
}*/
//outro exemplo
    res.send(`Ola, ${req.params.nome}, que é um profissional ${req.params.cargo}`)
    //resultado: Ola, gabriel, da funcao dev
})
//detalhe, .send só pode ser enviado uma vez, igual return em uma funcao

//para entrar, basta escrever http://localhost:3333/oi/"qualquer valor"
//da pra criar a quantidade de parametros que quiser, para acessar, a mesma coisa acima
//para mostrar o valor do parametro, usamos req.params. Usamos o req para obter os dados da requisicao para acessar o servidor
app.listen(3333)

//usando NODEMON. Ele serve para automatizar as atualizações que eu faço no codigo, assim nao preciso ficar fechando e abrindo o servidor toda hora pra validar uma talização
//utilize no console: npm install nodemon -g
//agora, ao inves de usar "node projeto.js", troque o node por nodemon no console
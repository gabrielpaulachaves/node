//pra baixar, vá no terminal e digite npm -init -y e npm install express --save
//simplifica o que ficaria muito verboso com node puro

// aprendendo rotas

const express = require("express")//aqui ta guardando a funcao
const app = express() //aqui ta executando a funcao
 //essa variável recebe a funcao acima vindo do módulo. E essa função cria uma instancia(copia do framework) pra dentro dessa variavel. 
// essa variavel que recebe essa funcao é a principal pro sistema

//para criar um servidor com express

//ao acessar o servidor, recebemos "Cannot GET /", isso acontece pois não temos rota definida.
//rota = caminho pra aplicação
//criando a rota

app.get("/", function(req, res){
    res.send("aparesendo no servidor") //aqui nao é end, e sim send
})
//podemos ir adicionando outras rotas
app.get("/sobre", function(req, res){
    res.send("página de sobre")
})
app.get("/blog",(req, res)=>{
    res.send("página do blog")
})
//para acessar, http://localhost:3333/blog

app.listen(3333, function(){
    console.log("servidor aberto!")
}) //essa funcao tem sempre que ser a ultima no codigo

// para mostrarmos algo na tela, usamos callback, por exemplo, essa funcao dentro da funcao listen()

//express é orientado a rotas



//protocolo HTTP no node
//HTTP é um "caminho" pelo qual a comunicacao entre o cliente e servidor passa

//permite criacao heb backend
let http = require("http")
                                //responde o usuario
http.createServer(function(req, res){
    res.end("oi")

}).listen(3333)

console.log("servidor criado")
//para criar, basta digitar node http.js (nome desse arquivo) no console do pc
//pra fechar, use CTRL + C

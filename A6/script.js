//npm install --save mongoose

//para se conectar ao mongoose após instalar o mongoose

//configuração

const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost/banco").then(()=>{console.log(`conectado`)}).catch((error)=>{console.log(`deu erro, ${error}`)})
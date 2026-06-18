//npm install --save mongoose

//para se conectar ao mongoose após instalar o mongoose

//digite mongosh no terminal
//

//configuração

const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost/banco").then(()=>{console.log(`conectado`)}).catch((error)=>{console.log(`deu erro, ${error}`)})
//node script.js para se comunicar com o mongoDB
//mongosh para abrir o banco de dados (ou seja, verificar se realmente funcionou)

//definindo model

const usuSchema = mongoose.Schema({

    nome:{
        type: String,
        require: true
    },
    idade: {
        type: Number,
        require: true
    },
    email:{
        type: String,
        require: true
    },
    pais:{
       type: String,
    }
})
             //nome dela   //colection
mongoose.model('usuarios', usuSchema) //definindo o nome da colection

//como inserir um dado a essa colection

const CadUsu = mongoose.model('usuarios')

 new CadUsu({
     nome:'Coruja',
     idade:20,
     email:'coruja@gmail.com',
     pais:'Bostil'
    }).save().then(()=>{console.log("usuario registrado")}).catch((err)=>{console.log(err)})

     //agora sim, para enviar pro banco, basta rodar esse arquivo e pronto. node script.js
     //use banco
     //show collections
     //db.usuarios.find() (para exibir os dados)
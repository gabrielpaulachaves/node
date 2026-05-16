//usando handlebars nesse projeto, instalamos ele junto com o express
//npm install --save express-handlebars
//o handlebars vai nos ajudar a exibir dados que vem do backend no nosso frontend

const express = require("express")
const app = express()
const handlebars = require("express-handlebars")
const Sequelize = require("sequelize")



//configurando o handlebars, deixando claro quero queremos usar o handlebars como template engine

//config
    //template engine                           //main é o template padrao da aplicacao
                                              //vc pode colocar qualquer nome, nao precisa ser main, contantro que o arquivo .handlebars tenha o mesmo nome
        //aqui a gente configura a engine que vamos usar, estamos ensinando o express a engine para renderizar a template                              
        app.engine("handlebars", handlebars({defaultLayout: "main"}))

                //esses sao valores fixos que o handlebars(ou qualquer outra engine, mas se for outra engine, a gente tira handlebars e coloca o nome dela) espera
                //o set define a engine que configuramos como padrao
                //view engine = configuracao padrao do express. Já o segundo parametro depende da engine que vamos usar
        app.set("view engine", "handlebars")  
//depois disso, precisamos criar uma pasta chamada "views". exatamente esse nome. E dentro da pasta views, a gente cria outra pasta com o nome layouts, e dentro dessa pasta, um arquivo .handlebars. Pois o handlebars procura por esse caminho

//agora colocamos o banco de dados
const sequelize = new Sequelize("sequelize", "root", "SQLgabriel2025!", {
    host: "localhost",
    dialect: "mysql"
})

app.listen(3333, ()=>{
    console.log("Rodando!")
})
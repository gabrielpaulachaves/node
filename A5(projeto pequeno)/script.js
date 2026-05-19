//usando handlebars nesse projeto, instalamos ele junto com o express
//npm install --save express-handlebars
//o handlebars vai nos ajudar a exibir dados que vem do backend no nosso frontend

const express = require("express")
const app = express()
const {engine} = require("express-handlebars")
const bodyparser = require("body-parser")
const Sequelize = require("sequelize")



//configurando o handlebars, deixando claro quero queremos usar o handlebars como template engine

//config
    //template engine                           //main é o template padrao da aplicacao
                                              //vc pode colocar qualquer nome, nao precisa ser main, contantro que o arquivo .handlebars tenha o mesmo nome
        //aqui a gente configura a engine que vamos usar, estamos ensinando o express a engine para renderizar a template                              
        app.engine("handlebars", engine({defaultLayout: "main"}))
                                    //esse main permite que a gente não precise escrever o cabeçalho basico de html, mas esse será o arquivo molde principal, para os outros conteudos, criamos outros arquivos (detalhe, o arquivo main fica dentro da pasta layouts, e os outros arquivos dentro da pasta views)

                //esses sao valores fixos que o handlebars(ou qualquer outra engine, mas se for outra engine, a gente tira handlebars e coloca o nome dela) espera
                //o set define a engine que configuramos como padrao
                //view engine = configuracao padrao do express. Já o segundo parametro depende da engine que vamos usar
        app.set("view engine", "handlebars")  

    app.use(bodyparser.urlencoded({extended: false}))
    app.use(bodyparser.json())
//depois disso, precisamos criar uma pasta chamada "views". exatamente esse nome. E dentro da pasta views, a gente cria outra pasta com o nome layouts, e dentro dessa pasta, um arquivo .handlebars. Pois o handlebars procura por esse caminho

//agora colocamos o banco de dados
const sequelize = new Sequelize("sequelize", "root", "SQLgabriel2025!", {
    host: "localhost",
    dialect: "mysql"
})

app.get("/cad", (req, res)=>{
    res.render("formulario")
    //res.send("rota funcionando")
    //pra fazer o codigo handlebars aparecer, digite res.render(nome do arquivo em handlebars)
})
//criando a rota para receber os valores do formulario. 

        //coloque essa rota dentro do action do formulario
    //usaremos .post pois o method do formulario é post    
app.post("/add", (req, res)=>{  //post não é acessivel pela URL
    res.send(`título: ${req.body.titulo}, conteúdo: ${req.body.conteudo}`)
})
//usando body parser. Ele serve para receber os dados do formulario, para baixar: npm install --save body-parser. Agora precisamos carregar ele, e da mesma forma como carregamos os outros, criando uma variavel. Na linha 27 iremos configura-lo

//agora, na linha 47, iremos pegar os dados com o body-parser. req.body. nome do campo que queremos pegar os dados. e ele vai passar pra json 


app.listen(3333, ()=>{
    console.log("Rodando!")
})
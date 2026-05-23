//usando handlebars nesse projeto, instalamos ele junto com o express
//npm install --save express-handlebars
//o handlebars vai nos ajudar a exibir dados que vem do backend no nosso frontend

const express = require("express")
const app = express()
const {engine} = require("express-handlebars")
const bodyparser = require("body-parser")
const post = require("./models/Post")



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

app.get("/", (req, res)=>{
    //exibindo o conteudo do banco de dados no frontend
    //post.findAll() vai retornar todos os registros dentro da tabela referente
    //.findAll() retorna um array
    post.findAll({raw: true,
        order:[["id", "DESC"]] //DESC para o mais recente, ASC para o mais antigo
    }).then((posts)=>{ 
        console.log(posts)
        res.render("home", {posts: posts}) 
    })
   
})

//deletando registro no banco pelo front

app.get("/delete/:id", (req, res)=>{
                    //esse "id" precisa ter o mesmo nome da coluna id da tabela, aqui ta dizendo que o id da tabela é o id passado pelo parametro
    post.destroy({where:{"id": req.params.id}}).then(()=>{res.send("postagem deletada")}).catch((error)=> {res.send(`erro ao deletar dado ${error}`)})
})



app.get("/cad", (req, res)=>{
    res.render("formulario")
    //res.send("rota funcionando")
    //pra fazer o codigo handlebars aparecer, digite res.render(nome do arquivo em handlebars)
})


//criando a rota para receber os valores do formulario. 

        //coloque essa rota dentro do action do formulario
    //usaremos .post pois o method do formulario é post   

app.post("/add", (req, res)=>{
    //post não é acessivel pela URL
    //res.send(`título: ${req.body.titulo}, conteúdo: ${req.body.conteudo}`)
    //colocando dos dados do formulario no banco de dados
    post.create({
        titulo: req.body.titulo,
        conteudo: req.body.conteudo
    }).then(()=>{res.redirect("/")}).catch(error =>{res.send(`deu erro ${error}`)})
})

//agora, vamos criar uma rota de uma pagina que mostra os posts
//pra isso, lá no .then do app.post, colocamos res.redirect


//usando body parser. Ele serve para receber os dados do formulario, para baixar: npm install --save body-parser. Agora precisamos carregar ele, e da mesma forma como carregamos os outros, criando uma variavel. Na linha 27 iremos configura-lo

//agora, na linha 47, iremos pegar os dados com o body-parser. req.body. nome do campo que queremos pegar os dados. e ele vai passar pra json 

//uma boa prática é separar os modulos por pasta (e deixar o nome do arquivo em linha maiuscula)

//passando o sequelize para uma pasta separada, e depois exportando pra ca
//na linha 9



app.listen(3333, ()=>{
    console.log("Rodando!")
})
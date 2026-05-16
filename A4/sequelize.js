//sequelize ajuda trabalhar com banco de dados direto do node
//para baixar: npm install --save sequelize

//agora, para usar com o mysql, vamos baixar outro modulo, o mysql2: npm install --save mysql2
//ORM: facilita o acesso ao banco de dados, qual que o sequelize é

const express = require("express")
const app = express()

const Sequelize = require("sequelize")
const sequelize = new Sequelize("sequelize", "root", "SQLgabriel2025!", {
    host: "localhost",
    dialect: "mysql"
})
// esse new Sequelize() pede cinco parametros, o primeiro é a database que quero conectar(o nome dela que eu criei), o segundo é o usuario do db, e a terceira é a senha, o quatro é o local, e o ultimo é qual tipo de db conectar

//agora, testando se a conexao funcionou

sequelize.authenticate().then(()=>{console.log("conectado")}).catch((error)=>{console.log(error)})
//nodemon sequelize.js
/*[nodemon] app crashed - waiting for file changes before starting...
[nodemon] restarting due to changes...
[nodemon] starting `node sequelize.js`
[nodemon] restarting due to changes...
[nodemon] starting `node sequelize.js`
[nodemon] restarting due to changes...
[nodemon] starting `node sequelize.js`
[nodemon] restarting due to changes...
[nodemon] starting `node sequelize.js`
Executing (default): SELECT 1+1 AS result
conectado
 */

//Aprendendo model
//model = referencia da sua tabela no sequelize
//models podem ser usados para criar tabelas no node
//models é como um tradutor do js para o SQL, 

//para criar um model, crie uma variavel 

//o define cria um modelo de tabela que queremos colocar no mysql, sendo o primeiro parametro o nome da tabela, e o que vem dentro dos {} as colunas, e dentro dos {} das colunas, seus atributos, etc
const postagem = sequelize.define("postagens", {
    titulo:{
       type: Sequelize.STRING  //string tem limite, text não
    },
    conteudo:{
        type: Sequelize.TEXT
    }
}) 

//models cria um modelo pra tabela, para realmente criar a tabela no mysql, usamos sync()

//postagem.sync()

/*mysql> show tables;
+---------------------+
| Tables_in_sequelize |
+---------------------+
| postagens           |
+---------------------+
*/

const usuarios = sequelize.define("usuarios", {
    nome:{
        type: Sequelize.STRING
    },
    funcao:{
        type: Sequelize.STRING
    },
    idade:{
        type: Sequelize.INTEGER
    },
    email:{
        type: Sequelize.STRING
    }
})

//usuarios.sync()

//DICA, apos criar, coloque como comentario, pois se nao vai recriar a tabela toda hora

//inserindo dados, usamos variaveldatabela.create({})

/*postagem.create({
    titulo: "A masmorra do dragao",
    conteudo: "quando a lua cai, o dragao aparece"
})*/
//uma dica, feche o servidor antes de adicionar a linha, caso esteja usando nodemon

usuarios.create({
    nome: "Pedrinho",
    funcao: "estoquista",
    idade: 21,
    email: "pedrodasilvapereirasampaiojunir@gmail.com"
})

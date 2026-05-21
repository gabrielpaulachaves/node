const db = require("./db")
//esse ./ diz pro codigo que está na mesma pasta o arquivo requerido

//criando a tabela
                //pega a variavel de onde exportamos 
                //podemos usar define para se referir a uma tabela já existente, pois é apenas um model
const post = db.sequelize.define("postagens", {
    titulo:{
        type: db.Sequelize.STRING
    },
    conteudo:{
        type: db.Sequelize.TEXT
    }
})

//post.sync()
//agora vou exportar esse modulo aqui 
module.exports = post;
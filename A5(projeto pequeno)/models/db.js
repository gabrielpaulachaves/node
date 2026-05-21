const Sequelize = require("sequelize")
const sequelize = new Sequelize("postapp", "root", "SQLgabriel2025!", {
    host: "localhost",
    dialect: "mysql"
})
//exportando criando um objeto
module.exports = {
    Sequelize : Sequelize,
    sequelize : sequelize
}
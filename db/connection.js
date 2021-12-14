const Sequelize = require("sequelize");



const db = new Sequelize(process.env.DB_NAME, process.env.DB_USER, '', {
    host: process.env.DB_HOST,
    dialect: 'mariadb',
} )




module.exports = db;
const {Sequelize} = require('sequelize');
const config = require('../../config')
require('dotenv').config()

const db = new Sequelize({
    dialect:'postgres',
    host: config.db.host,
    port: config.db.port,
    username: config.db.user,
    password: config.db.pass,
    database: config.db.name,
    dialectOptions: 
        process.env.NODE_ENV === 'production'
        ? {
            ssl: {
                require: true,
                rejectUnauthorized: false
            }
        } : {}

})

module.exports = db
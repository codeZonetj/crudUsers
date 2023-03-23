const {Sequelize} = require('sequelize');
require('dotenv').config()

const db = new Sequelize({
    dialect:'postgres',
    host:'localhost',
    port:'5432',
    username:'postgres',
    password:'Lucianita1*',
    database:'crudUsersLocal',
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
const {Sequelize} = require('sequelize');

const db = new Sequelize({
    dialect:'postgres',
    host:'https://crudusers.onrender.com',
    port:'5432',
    username:'postgres',
    password:'Lucianita1*',
    database:'crudUsers'

})

module.exports = db
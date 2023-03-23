// {
//     firstName:'',
//     lastName:'',
//     age:'',
//     email:'',
//     password:'',
//     birthday:''
// }

const {DataTypes} = require('sequelize')
const db = require('../utils/database')

const Users = db.define('users', {
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    firstName:{
        type:DataTypes.STRING,
        allowNull:false

    },
    lastName:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false,
        validate: {
            isEmail:true
          }
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false,
        

    },
    birthday:{
        type:DataTypes.DATE,
        
    }
}, {
    timestamps:false
})

module.exports = Users

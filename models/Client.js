const Sequelize=require('sequelize');
const db=require('../config/database');

const Client= db.define('client',{
    names:{
        type:Sequelize.STRING
    },
    email:{
        type:Sequelize.STRING,
        unique:true
    },
    phone:{
        type:Sequelize.STRING
    },
    password:{
        type:Sequelize.STRING
    }
})

module.exports=Client;
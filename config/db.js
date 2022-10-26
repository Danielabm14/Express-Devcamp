const Sequelize = require('./seq')
const colors = require('colors')
const{ DataTypes } = require ('sequelize')

//CREAR UNA INSTANCIA DE MODELO USER
const UserModel = require('../models/user')
const User = UserModel(Sequelize, DataTypes)

// definir una funcion de conexion a la base de datos

const connectDB = async () =>{

    try {
        //CONECTARSE A LA BASE DE DATOS 
        await Sequelize.authenticate()
        console.log('conectado a mysql'.green) 
        const jane = await User.create(
            {   username: "Jane", 
                email: "jane@gmail.com",
                password: "1234"
            });
        console.log("Jane's auto-generated ID:", jane.id);

    } catch (error) {
        console.log(error)
    }
   
}

connectDB()

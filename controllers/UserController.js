//dependencias:
//el objeto de conexion
const Sequelize = require('../config/seq')
//datatypes de sequelize
const { DataTypes } = require('sequelize')
//el modelo
const UserModel = require('../models/user')


//crear la entidad 

const User = UserModel(Sequelize,DataTypes)


//crear nuevo user
exports.CreateUser = async (req, res) => {
    //crear los usuarios
    const newUser = await User.create(req.body)
    res
        .status(200)
        .json({
            "succes" : true,
            "data" : newUser
        })
}


//listar todos los user
exports.getAllUsers = async (req, res) => {
    //traer los usuarios
    const users = await User.findAll();
    res
        .status(200)
        .json({
            "succes" : true,
            "data" : users
        })
}


//listar user por id 
exports.getSingleUser = async (req, res) => {
    const singleUser = await User.findByPk(req.params.id);
    console.log(req.params.id)
    res
        .status(200)
        .json({
            "succes" : true,
            "data" : singleUser
        })

    }
//actualizar user
exports.updateUser = async (req, res)=>{
    // Change everyone without a last name to "Doe"
    await User.update( req.body, {
        where: {
            id: req.params.id
        }
    });
    const singleUser = await User.findByPk(req.params.id)
    //console.log(req.params.id)
    res
        .status(200)
        .json({
           "success": true,
           "data": singleUser
    })
}


//Eliminar user

exports.deleteUser = async (req, res) => {
    const singleUser = await User.findByPk(req.params.id)
    await User.destroy({
        where: {
          id: req.params.id
        }
      });
    
    res
        .status(200)
        .json({
            "succes" : true,
            "data" : singleUser
        })
}
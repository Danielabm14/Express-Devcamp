//dependencias:
//el objeto de conexion
const Sequelize = require('../config/seq')
//datatypes de sequelize
const { DataTypes, ValidationError } = require('sequelize')

//el modelo
const UserModel = require('../models/user')


//crear la entidad 

const User = UserModel(Sequelize,DataTypes)


//crear nuevo user
exports.CreateUser = async (req, res) => {
    //crear los usuarios
    try {
        const newUser = await User.create(req.body)
     
            res
            .status(200)
            .json({
            "succes" : true,
            "data" : newUser
            })
    } catch (error) {
        if(error instanceof ValidationError){
            //recorrer arreglo de errores
            //foreach
            //map
            const errores = error.errors.map((elemento) => elemento.message)
            res
            .status(400)
            .json({
                "succes": false,
                "errors": error
                 })
        }else{
            res
            .status(400)
            .json({
                "succes": false,
                "errors": "error de servidor"
                 })
        }
    }
   
}


//traer todos los user
exports.getAllUsers = async (req, res) => {
try {
    //traer los usuarios
    const users = await User.findAll();
    res
        .status(200)
        .json({
            "succes" : true,
            "data" : users
        })
} catch (error) {
    res
    .status(400)
    .json({
        "succes": false,
        "errors": "error,servidor desconocido"
         })
}

    
}


//listar user por id 
exports.getSingleUser = async (req, res) => {
try {
    const singleUser = await User.findByPk(req.params.id);
    if(singleUser){
    res
        .status(200)
        .json({
            "succes" : true,
            "data" : singleUser
        })

}else{
    res
    .status(00)
    .json({
        "succes": false,
        "errors": "usuario no existente"
        })
        }
} catch (error) {
    res
    .status(400)
    .json({
        "succes": false,
        "errors": "error servidor desconocido"
         })
}

    

    }
//Actualizar el user 
exports.updateUser = async (req, res)=>{
    try {
     const singleUser = await User.findByPk(req.params.id);
     if(!singleUser){
         res
         .status(400)
         .json({
             "success": false,
             "errors": "usuario no existe"
         })
     }else{
         // actualizar usuario
     await User.update(req.body, {
         where: {
           id: req.params.id
         } });
         //selecciono user actualizado
         const updatedUser = await User.findByPk(req.params.id)
       //envia respuesta
       res
       .status(200)
       .json({
           "success": true,
           "data": updatedUser
       }) 
     }
      
    } catch (error) {
     res
         .status(400)
         .json({
             "success": false,
             "errors": "error de servidor desconocido"
         })
    }
 }


//Eliminar user

exports.deleteUser = async (req, res)=>{
    //console.log(req.params.id)
    try {
        const SingleUser = await User.findByPk(req.params.id);
        if (!SingleUser) {
            res
            .status(400)
            .json({
                "success": false,
                "errors": "Usuario no existente"
        })
        } else {
            await User.destroy({
                where: {
                    id: req.params.id
                }
              });
        const deleteUser = await User.findByPk(req.params.id);

            res
            .status(200)
            .json({
                "success": true,
                "data": SingleUser
            })
        }
    } catch (error) {
        res
        .status(400)
        .json({
            "success": false,
            "errors": " Error de servidor desconocido"
        })
    }
    
}
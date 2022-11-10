//dependencias:
//el objeto de conexion
const Sequelize = require('../config/seq')
//datatypes de sequelize
const { DataTypes, ValidationError } = require('sequelize')

//el modelo
const CourseModel = require('../models/courses')


//crear la entidad 

const courses = CourseModel(Sequelize,DataTypes)


//crear nuevo courses
exports.Createcourses = async (req, res) => {
    //crear los coursess
    try {
        const newcourses = await courses.create(req.body)
     
            res
            .status(200)
            .json({
            "succes" : true,
            "data" : newcourses
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
                "errors": errores
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


//traer todos los courses
exports.getAllcoursess = async (req, res) => {
try {
    //traer los coursess
    const coursess = await courses.findAll();
    res
        .status(200)
        .json({
            "succes" : true,
            "data" : coursess
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


//listar courses por id 
exports.getSinglecourses = async (req, res) => {
try {
    const singlecourses = await courses.findByPk(req.params.id);
    if(singlecourses){
    res
        .status(200)
        .json({
            "succes" : true,
            "data" : singlecourses
        })

}else{
    res
    .status(00)
    .json({
        "succes": false,
        "errors": "courses no existente"
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
//Actualizar el courses 
exports.updatecourses = async (req, res)=>{
    try {
     const singlecourses = await courses.findByPk(req.params.id);
     if(!singlecourses){
         res
         .status(400)
         .json({
             "success": false,
             "errors": "courses no existe"
         })
     }else{
         // actualizar courses
     await courses.update(req.body, {
         where: {
           id: req.params.id
         } });
         //selecciono courses actualizado
         const updatedcourses = await courses.findByPk(req.params.id)
       //envia respuesta
       res
       .status(200)
       .json({
           "success": true,
           "data": updatedcourses
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


//Eliminar courses

exports.deletecourses = async (req, res)=>{
    //console.log(req.params.id)
    try {
        const Singlecourses = await courses.findByPk(req.params.id);
        if (!Singlecourses) {
            res
            .status(400)
            .json({
                "success": false,
                "errors": "courses no existente"
        })
        } else {
            await courses.destroy({
                where: {
                    id: req.params.id
                }
              });
        const deletecourses = await courses.findByPk(req.params.id);

            res
            .status(200)
            .json({
                "success": true,
                "data": Singlecourses
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
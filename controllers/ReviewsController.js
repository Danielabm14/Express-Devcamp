//dependencias:
//el objeto de conexion
const Sequelize = require('../config/seq')
//datatypes de sequelize
const { DataTypes, ValidationError } = require('sequelize')

//el modelo
const ReviewModel = require('../models/reviews')


//crear la entidad 

const reviews = ReviewModel(Sequelize,DataTypes)


//crear nuevo user
exports.CreateReviews = async (req, res) => {
    //crear los reviewss
    try {
        const newreviews = await reviews.create(req.body)
     
            res
            .status(200)
            .json({
            "succes" : true,
            "data" : newreviews
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


//traer todos los reviews
exports.getAllReviews = async (req, res) => {
try {
    //traer los reviewss
    const todosReviews = await reviews.findAll();
    res
        .status(200)
        .json({
            "succes" : true,
            "data" : todosReviews
        })
} catch (error) {
    /*res
    .status(400)
    .json({
        "succes": false,
        "errors": error
         })
    }*/
    console.log(error)

}
}


//listar reviews por id 
exports.getSingleReviews = async (req, res) => {
try {
    const singleReviews = await reviews.findByPk(req.params.id);
    if(singleReviews){
    res
        .status(200)
        .json({
            "succes" : true,
            "data" : singleReviews
        })

}else{
    res
    .status(00)
    .json({
        "succes": false,
        "errors": "reviews no existente"
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
//Actualizar el reviews 
exports.updateReviews = async (req, res)=>{
    try {
     const singleReviews = await reviews.findByPk(req.params.id);
     if(!singleReviews){
         res
         .status(400)
         .json({
             "success": false,
             "errors": "reviews no existe"
         })
     }else{
         // actualizar reviews
     await reviews.update(req.body, {
         where: {
           id: req.params.id
         } });
         //selecciono reviews actualizado
         const updatedReviews = await reviews.findByPk(req.params.id)
       //envia respuesta
       res
       .status(200)
       .json({
           "success": true,
           "data": updatedReviews
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


//Eliminar Reviews

exports.deleteReviews = async (req, res)=>{
    //console.log(req.params.id)
    try {
        const SingleReviews = await reviews.findByPk(req.params.id);
        if (!SingleReviews) {
            res
            .status(400)
            .json({
                "success": false,
                "errors": "Reviews no existente"
        })
        } else {
            await reviews.destroy({
                where: {
                    id: req.params.id
                }
              });
        const deleteReviews = await reviews.findByPk(req.params.id);

            res
            
            .status(200)
            .json({
                "success": true,
                "data": SingleReviews
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
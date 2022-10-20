const mongoose = require('mongoose')

//modelo bootcamps

const BootcampsSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [
            true,
            "por favor, ingresa nombre"
        ],
        unique: true, 
        maxlength: [
            30,
            "No se admiten bootcamps mayores a 30"
        ]
    },
    description: {
        type: String,
        required: [
            true,
            'por favor, ingrese descripcion'
        ],
        maxlength: [
            "no se admiten descripciones mayores a 500"
        ]
    }, 
    phone : {
        type: String,
        maxlength: [
            20,
            "Telefonos no  mayores a 20"
        ]
    }, 
    email : {
        type: String,
        match: [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            'por favor,ingrese email valido'
        ]
    }, 
    averageCost : Number,
    averageRating: {
        type: Number,
        min: [1, 'calificacion minima : 1'],
        max: [10, 'calificacion maxima: 10']
    },
   
})

module.exports =mongoose.model('bootcamp' , BootcampsSchema)

const express = require('express')

//definir objeto de ruteo
const router= express.Router()


//crear nuevo courses
router.post('/', (req, res) => {
    res
        .status(200)
        .json({
            "succes" : true,
            "data" : "aqui vamos a registrar todos loa courses"
        })
})


//listar todos los courses
router.get('/', (req, res) => {
    res
        .status(200)
        .json({
            "succes" : true,
            "data" : "aqui van a salir los courses"
        })
})


//listar bootcamp por id 
router.get('/:id', (req, res) => {
    console.log(req.params.id)
    res
        .status(200)
        .json({
            "succes" : true,
            "data" : `aqui va a salir el courses cuyo id es ${req.params.id}`
        })
})

//actualizar courses

router.put('/:id', (req, res) => {
    console.log(req.params.id)
    res
        .status(200)
        .json({
            "succes" : true,
            "data" : `aqui va a actualizarce el courses cuyo id es ${req.params.id}`
        })
})

//Eliminar courses

router.delete('/:id', (req, res) => {
    //console.log(req.params.id)
    res
        .status(200)
        .json({
            "succes" : true,
            "data" : `aqui se eliminara el courses cuyo id es ${req.params.id}`
        })
})

module.exports = router
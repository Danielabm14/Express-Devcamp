const express = require('express')

//definir objeto de ruteo
const router= express.Router()


//crear nuevo bootcamps
router.post('/', (req, res) => {
    res
        .status(200)
        .json({
            "succes" : true,
            "data" : "aqui vamos a registrar todos loa bootcamps"
        })
})


//listar todos los bootcamps
router.get('/', (req, res) => {
    res
        .status(200)
        .json({
            "succes" : true,
            "data" : "aqui van a salir los bootcamps"
        })
})


//listar bootcamp por id 
router.get('/:id', (req, res) => {
    console.log(req.params.id)
    res
        .status(200)
        .json({
            "succes" : true,
            "data" : `aqui va a salir el bootcamp cuyo id es ${req.params.id}`
        })
})

//actualizar bootcamps

router.put('/:id', (req, res) => {
    console.log(req.params.id)
    res
        .status(200)
        .json({
            "succes" : true,
            "data" : `aqui va a actualizarce el bootcamp cuyo id es ${req.params.id}`
        })
})

//Eliminar bootcamps

router.delete('/:id', (req, res) => {
    //console.log(req.params.id)
    res
        .status(200)
        .json({
            "succes" : true,
            "data" : `aqui se eliminara el bootcamp cuyo id es ${req.params.id}`
        })
})

module.exports = router


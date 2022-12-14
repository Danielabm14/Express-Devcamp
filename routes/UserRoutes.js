const express = require('express')
const {
    CreateUser,
    getAllUsers,
    getSingleUser,
    updateUser,
    deleteUser,
 } = require('../controllers/UserController')
//definir objeto de ruteo
const router= express.Router()

//crear rutas sin parametros
router.route('/')
            .get(getAllUsers)
            .post(CreateUser)

//crear rutas con parametros
router.route('/:id') 
            .get(getSingleUser)
            .put(updateUser)
            .delete(deleteUser)           

module.exports = router
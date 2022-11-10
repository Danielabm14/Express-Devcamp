const express = require('express')
const {
    Createcourses,
    getAllcoursess,
    getSinglecourses,
    updatecourses,
    deletecourses,
 } = require('../controllers/CoursesController')
//definir objeto de ruteo
const router= express.Router()

//crear rutas sin parametros
router.route('/')
            .get(getAllcoursess)
            .post(Createcourses)

//crear rutas con parametros
router.route('/:id') 
            .get(getSinglecourses)
            .put(updatecourses)
            .delete(deletecourses)           

module.exports = router
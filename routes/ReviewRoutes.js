const express = require('express')
const {
    CreateReviews,
    getAllReviews,
    getSingleReviews,
    updateReviews,
    deleteReviews,
 } = require('../controllers/ReviewsController')
//definir objeto de ruteo
const router= express.Router()

//crear rutas sin parametros
router.route('/')
            .get(getAllReviews)
            .post(CreateReviews)

//crear rutas con parametros
router.route('/:id') 
            .get(getSingleReviews)
            .put(updateReviews)
            .delete(deleteReviews)           

module.exports = router
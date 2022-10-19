//1.crear el obajeto express
const express = require('express')
//2. citar las dependencias necesarias 
const dotenv = require('dotenv')
const colors = require('colors')
const listEndpoint = require('express-list-endpoints')
//los componentes de ruta
const  bootcampRoutes = require('./routes/BootcapmRoutes')
const  courseRoutes = require('./routes/courseRoutes')

//3.ESTABLECER ARCHIVO DE CONFIGURACION
dotenv.config({
    path:'./config/config.env'
})
console.log(process.env.PORT)


//crear el objeto aplication
//para el servidor de desarrollo
const app =  express()

//rutas de proyecto
app.use('/api/v1/bootcamps', bootcampRoutes)
app.use('/api/v1/courses', courseRoutes)

//endpoint de aplicacion
app.get('/', (request , response ) => {

    response
        .status(200)
        .json({
            "success": true,
            "data" : "request exitosa"
        })
   
})

//enopoints de dominio
//bootcamps












//imprimir la lista de endpoints
//validas del proyecto
console.log(listEndpoint(app))



//ejecutar el servidor  de desarrollo
//parametros: 
//1. puerto de escucha -listen

app.listen(process.env.PORT, () =>{
console.log(`servidor activo en puerto 5000`.magenta)
})
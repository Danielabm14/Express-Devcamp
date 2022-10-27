const Sequelize = require('./seq')
const colors = require('colors')



const connectDB = async () =>{

    try {
        //CONECTARSE A LA BASE DE DATOS 
        await Sequelize.authenticate()
        console.log('conectado a mysql'.magenta) 
    } catch (error) {
        console.log(error)
    }
   
}

module.exports = connectDB

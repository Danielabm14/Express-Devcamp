'use strict';
const {
  Model
} = require('sequelize');
const { DataTypes, UniqueConstraintError } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class reviews extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  reviews.init({
        title: {
        type: DataTypes.STRING,
        allowNull: false,
        UniqueConstraintError: {
          args: true,
          msg: 'already exists'
      },
        validate:{
          unique(value) {
          
            return reviews.findOne({where:{title:value}})
              .then((title) => {
                if (title) {
                  throw new Error('Error, titulo repetido');
                }
              })
          },
        isAlpha: {
          args: true,
          msg: "title debe tener solo letras "
        },
        notNull: {
          args: true,
          msg: "title debe estar presente "
        },
        notEmpty: {
          args: true,
          msg: "title no debe ser vacio "
        },
        
      }
     },
     text:{
      type:DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: "texto no debe ser vacio "
        },
    },
  },
     rating:{
      type:DataTypes.STRING,
      validate:{
        isInt:{
        args:true,
        msg: "Rating debe ser entero"
        },
      },
     },

     //LLAVES FORANEAS
     bootcamp_id:{
      type:DataTypes.INTEGER,
     },
     user_id:{
      type:DataTypes.INTEGER,
     },
    },{ 
    sequelize,
    modelName: 'reviews',
    timestamps: false
     });
  return reviews;
};
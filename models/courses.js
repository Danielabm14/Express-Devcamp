'use strict';
const {
  Model
} = require('sequelize');
const { DataTypes, UniqueConstraintError } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class courses extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  courses.init({
        title: {
        type: DataTypes.STRING,
        allowNull: false,
        UniqueConstraintError: {
          args: true,
          msg: 'already exists'
      },
        validate:{
          unique(value) {
          
            return courses.findOne({where:{title:value}})
              .then((title) => {
                if (title) {
                  throw new Error('Error,titulo repetido');
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
     description:{
      type:DataTypes.STRING,
      validate: {
        isAlpha: {
          args: true,
          msg: "description debe tener solo letras "
        },
    },
  },
  
     weeks:{
      type:DataTypes.STRING,
      validate:{
        isInt: {
        args:true,
        msg: " debe ser entero"
        },
      },
     },
     enroll_Cost:{
      type:DataTypes.STRING,
      validate: {
        isNumeric:{
          args:true,
          msg: "enroll_cost debe ser numerico"
          },
    },
  },
  minimum_skill:{
    type:DataTypes.STRING,
    validate: {
      isInt:{
        args:true,
        msg: "minimum_skill debe ser entero"
        },
  },
},
  //llave foranea
  bootcamp_id:{
    type:DataTypes.INTEGER,
  },
    },{ 
    sequelize,
    modelName: 'courses',
    timestamps: false
     });
  return courses;
};
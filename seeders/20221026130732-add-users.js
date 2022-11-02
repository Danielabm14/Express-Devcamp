'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
     await queryInterface.bulkInsert('users', [{
       username: 'Daniela Baena',
       email: 'jdbaena00@misena.edu.co',
       password:'155258'
      }], {});
   
  },

  async down (queryInterface, Sequelize) {
    
     await queryInterface.bulkDelete('users', null, {});
     
  }
};

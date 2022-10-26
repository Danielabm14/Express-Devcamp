'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.bulkInsert('bootcamps', [{
      usernam: 'Daniela Baena',
      email: 'jdbaena00@misena.edu.co'
     }], {});
  
 },

 async down (queryInterface, Sequelize) {
   
    await queryInterface.bulkDelete('bootcamps' [{
                          username: 'Daniela Baena',
                          email: 'jdbaena00@misena.edu.co',
                          password: '45451'
                    },
                {
                           username: 'Jorge Lopez',
                           email: 'jorgelopez@misena.edu.co',
                           password: '45451'
                }
   
   ], {});
    
 }
};

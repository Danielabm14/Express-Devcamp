'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.bulkInsert('bootcamps', [{
                          name: 'PHP',
                          description: 'bootcamp for php learning',
                          phone: '(57) 551625',
                          average_cost:4500,
                          average_rating:3,
                          user_id: 1
                                 },

                                 {
                          name: 'express Backed',
                          description: 'bootcamp for jevascript learning',
                          phone: '(57) 5686842',
                          average_cost:4500,
                          average_rating:2,
                          user_id: 1
                                },
                               {
                               name: 'CSS bootcamp',
                               description: 'bootcamp for CSS learning',
                               phone: '(57) 254545475',
                              average_cost:4500,
                              average_rating:3,
                               user_id: 1
                               }
                                
    
], {});

   },
                                      

   async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('bootcamps', null, {});
    
 }
};
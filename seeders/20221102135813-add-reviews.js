'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.bulkInsert('reviews', [{
      title: 'PHP',
      text: 'bootcamp for php learning',
      rating: 8,
     bootcamp_id:1,
     user_id: 1
  },
  {
    title: 'JAVA',
      text: 'bootcamp for JAVA learning',
      rating: 2,
     bootcamp_id:1,
     user_id: 1
},
{
  title: 'CSS',
  text: 'bootcamp for CSS learning',
  rating: 3,
 bootcamp_id:1,
 user_id: 1
},


], {});
  
},

  async down (queryInterface, Sequelize) {
   
    await queryInterface.bulkDelete('reviews', null, {});
  }
};

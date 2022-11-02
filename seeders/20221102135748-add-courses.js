'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    
      await queryInterface.bulkInsert('courses', [{
        title: 'PHP',
        description: 'bootcamp for php learning',
        weeks: 1,
        enroll_cost: 565674,
        minimum_skill:'begginer',
        bootcamp_id:  1
    },
    {
      title: 'CSS',
      description: 'bootcamp for css learning',
      weeks: 1,
      enroll_cost: 4565,
      minimum_skill:'begginer',
      bootcamp_id:  1
  },
  {
    title: 'JAVA ',
    description: 'bootcamp for java learning',
    weeks: 1,
    enroll_cost: 45454,
    minimum_skill:'begginer',
    bootcamp_id:  1
},


  ], {});
    
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('courses', null, {});
  }
};

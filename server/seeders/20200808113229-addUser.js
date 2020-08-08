'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.bulkInsert('users', [{
        name: 'Zain',
        email: 'zaenuddinbl@gmail.com',
        password: '1234',
        createdAt : new Date(),
        updatedAt: new Date()
      }], {});
    
  },

  down: async (queryInterface, Sequelize) => {
   await queryInterface.bulkDelete('users', null, {});
  }
};

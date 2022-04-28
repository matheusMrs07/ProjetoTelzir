'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.bulkInsert('cities', [
      {
        name: 'Curitiba',
        Code: '41',
      },
      {
        name: 'São Paulo',
        Code: '11',
      },
      {
        name: 'Rio de Janeiro',
        Code: '21',
      },
      {
        name: 'Brasilia',
        Code: '61',
      },
      {
        name: 'Cuiabá',
        Code: '65',
      },

      
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};

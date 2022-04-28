'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
    
    await queryInterface.bulkInsert('plans', [
      {
      name: 'Flale mais 12',
      value: '10.0',
      time: '12.0',
      },
      {
        name: 'Flale mais 15',
        value: '12.0',
        time: '15.0',
      },
      {
        name: 'Flale mais 20',
        value: '15.0',
        time: '20.0',
      },
      {
        name: 'Flale mais 25',
        value: '18.0',
        time: '25.0',
      }
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

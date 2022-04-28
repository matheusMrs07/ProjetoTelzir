'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.bulkInsert('prices', [
      {
        origin: '41',
        destiny: '21',
        price: '1.22',
      },
      {
        origin: '41',
        destiny: '11',
        price: '1.52',
      },
      {
        origin: '41',
        destiny: '61',
        price: '1.5',
      },
      {
        origin: '41',
        destiny: '65',
        price: '1.99',
      },
      {
        origin: '21',
        destiny: '41',
        price: '1.02',
      },
      {
        origin: '21',
        destiny: '11',
        price: '0.99',
      },
      {
        origin: '21',
        destiny: '61',
        price: '1.3',
      },
      {
        origin: '21',
        destiny: '65',
        price: '1.65',
      },
      {
        origin: '11',
        destiny: '65',
        price: '1.12',
      },
      {
        origin: '11',
        destiny: '61',
        price: '1.15',
      },
      {
        origin: '11',
        destiny: '21',
        price: '0.89',
      },
      {
        origin: '11',
        destiny: '41',
        price: '1.22',
      },
      {
        origin: '61',
        destiny: '65',
        price: '0.5',
      },
      {
        origin: '61',
        destiny: '11',
        price: '1.99',
      },
      {
        origin: '61',
        destiny: '21',
        price: '1.89',
      },
      {
        origin: '61',
        destiny: '41',
        price: '1.60',
      },
      {
        origin: '65',
        destiny: '41',
        price: '1.10',
      },
      {
        origin: '65',
        destiny: '61',
        price: '0.6',
      },
      {
        origin: '65',
        destiny: '11',
        price: '1.99',
      },
      {
        origin: '65',
        destiny: '21',
        price: '1.89',
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

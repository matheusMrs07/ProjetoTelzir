'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
      
      await queryInterface.bulkInsert('users', [
        {
        name: 'Admin 1',
        phone: '1234567',
        email: 'admin@telzir.com',
        password: '$2b$10$DPJU37LSvy1pg74uc7w0nu.SnSHzsTrPdAxuPCRPtmWkiROXyFRpm'
        }
      ], {});
    
  },

  async down (queryInterface, Sequelize) {
    
  }
};

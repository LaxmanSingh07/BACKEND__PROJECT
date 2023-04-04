'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('Airports',[
    {
      name:'Kempegowda International Airport',
      // address:'Devanahalli, Bengaluru, Karnataka 560300',
      cityId:3,
      createdAt:new Date(),
      updatedAt:new Date()
    },
    {
      name:'Chhatrapati Shivaji International Airport',
      // address:'Sahar, Andheri East, Mumbai, Maharashtra 400099',
      cityId:3,
      createdAt:new Date(),
      updatedAt:new Date()

    },
    {
      name:'Indira Gandhi International Airport',
      // address:'Delhi, New Delhi, Delhi 110037',
      cityId:2,
      createdAt:new Date(),
      updatedAt:new Date()

    },
    {
      name:'Chennai International Airport',
      // address:'Meenambakkam, Chennai, Tamil Nadu 600027',
      cityId:1,
      createdAt:new Date(),
      updatedAt:new Date()

    }
   ],{});
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

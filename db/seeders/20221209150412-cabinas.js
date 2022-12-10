'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Cabinas', [{
      numero: 1,
      direccionId: 1,
      createdAt: "2022-12-09 21:08:00",
      updatedAt: "2022-12-09 21:08:00"
    },
    {
      numero: 2,
      direccionId: 1,
      createdAt: "2022-12-09 21:08:00",
      updatedAt: "2022-12-09 21:08:00"
    },
    {
      numero: 1,
      direccionId: 2,
      createdAt: "2022-12-09 21:08:00",
      updatedAt: "2022-12-09 21:08:00"
    },
    {
      numero: 2,
      direccionId: 2,
      createdAt: "2022-12-09 21:08:00",
      updatedAt: "2022-12-09 21:08:00"
    },
    {
      numero: 1,
      direccionId: 3,
      createdAt: "2022-12-09 21:08:00",
      updatedAt: "2022-12-09 21:08:00"
    },
    {
      numero: 2,
      direccionId: 3,
      createdAt: "2022-12-09 21:08:00",
      updatedAt: "2022-12-09 21:08:00"
    }
  ], {});

  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Cabinas', null, {});

  }
};

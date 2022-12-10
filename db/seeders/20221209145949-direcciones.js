'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Direcciones', [{
      provincia: "Buenos Aires",
      ruta: 2,
      kilometro: 50,
      createdAt: "2022-12-09 21:08:00",
      updatedAt: "2022-12-09 21:08:00"
    },
    {
      provincia: "Santa Fe",
      ruta: 8,
      kilometro: 450,
      createdAt: "2022-12-09 21:08:00",
      updatedAt: "2022-12-09 21:08:00"
    },
    {
      provincia: "Santa Cruz",
      ruta: 40,
      kilometro: 1500,
      createdAt: "2022-12-09 21:08:00",
      updatedAt: "2022-12-09 21:08:00"
    }], {});

  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Direcciones', null, {});
  }
};

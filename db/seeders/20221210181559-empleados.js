'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Empleados', [{
      nombre: 'matias',
      apellido: 'alvarez',
      dni: 35358000,
      ingresoNomina: "2022-12-09 21:08:00",
      createdAt: "2022-12-09 21:08:00",
      updatedAt: "2022-12-09 21:08:00"
    },
    {
      nombre: 'pablo',
      apellido: 'elustondo',
      dni: 36358000,
      ingresoNomina: "2022-12-09 21:08:00",
      createdAt: "2022-12-09 21:08:00",
      updatedAt: "2022-12-09 21:08:00"
    },
    {
      nombre: 'gabriela',
      apellido: 'renna',
      dni: 35720500,
      ingresoNomina: "2022-12-09 21:08:00",
      createdAt: "2022-12-09 21:08:00",
      updatedAt: "2022-12-09 21:08:00"
    },
    {
      nombre: 'mariela',
      apellido: 'fenna',
      dni: 36358000,
      ingresoNomina: "2022-12-09 21:08:00",
      createdAt: "2022-12-09 21:08:00",
      updatedAt: "2022-12-09 21:08:00"
    },
    {
      nombre: 'Cosme',
      apellido: 'Fulanito',
      dni: 40258333,
      ingresoNomina: "2022-12-09 21:08:00",
      createdAt: "2022-12-09 21:08:00",
      updatedAt: "2022-12-09 21:08:00"
    }
  ], {});

  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Empleados', null, {});
  }
};

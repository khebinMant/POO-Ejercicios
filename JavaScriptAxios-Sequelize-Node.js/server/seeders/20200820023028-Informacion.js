'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Informacion', [
      {
        primerElemento: 1,
        segundoElemento: 2,
        maximoValorSerie: 7,
        sumaPares: 1,
        listaPares: '3',
        listaTodos: '3',
        createdAt: new Date(Date.now()),
        updatedAt: new Date(Date.now())
      }
    ], {});
    
  },

  down: (queryInterface, Sequelize) => {
  
      return queryInterface.bulkDelete('Informacion', null, {});
  }
};

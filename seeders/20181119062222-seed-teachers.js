'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
    */
    return queryInterface.bulkInsert('Teachers', [
      {
      firstname : 'Bambang',
      lastname  : "Suprapto",
      email     : 'bambangsuprato@sekolah.id'
      },{
      firstname : 'Rukmana',
      lastname  : 'Fatmawati',
      email     : 'rukmanafatmawati@sekolah.id'
      },{
      firstname : 'Butet',
      lastname  : 'Naiborhu',
      email     : 'butetnaiborhu@sekolah.id'
      },{
      firstname : 'Yulius',
      lastname  : 'Prawinegara',
      email     : 'yuliusprawinegara@sekolah.id'
      }
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
    */
    return queryInterface.bulkDelete('Teachers', null, {});
  }
};

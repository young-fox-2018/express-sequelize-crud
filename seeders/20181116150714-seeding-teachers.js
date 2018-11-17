'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
   return queryInterface.bulkInsert("Teachers", [
    {
      first_name: "Bambang",
      last_name: "Suprapto",
      email: "bambangsuprapto@sekolah.id",
      updatedAt: new Date(),
      createdAt: new Date()
    },
    {
      first_name: "Rukmana",
      last_name: "Fatmawati",
      email: "rukmanafatmawati@sekolah.id",
      updatedAt: new Date(),
      createdAt: new Date()
    },
    {
      first_name: "Butet",
      last_name: "Naiborhu",
      email: "butetnaiborhu@sekolah.id",
      updatedAt: new Date(),
      createdAt: new Date()
    },
    {
      first_name: "Yulius",
      last_name: "Prawiranegara",
      email: "yuliusprawiranegara@sekolah.id",
      updatedAt: new Date(),
      createdAt: new Date()
    }
  ])
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete("Teachers", null)
  }
};

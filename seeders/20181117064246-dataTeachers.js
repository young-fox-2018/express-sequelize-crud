'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Teachers', [{
      first_name: "Bambang",
      last_name: "Suparapto",
      email: "bambangsuprapto@sch.id",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      first_name: "Rukmana",
      last_name: "Fatmawati",
      email: "rukmanafatmawati@sch.id",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      first_name: "Butet",
      last_name: "Nairbohu",
      email: "butetnairbohuo@sch.id",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      first_name: "Yulius",
      last_name: "Prawiranegara",
      email: "yuliusprawiranegara@sch.id",
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Teachers', null, {});

  }
};

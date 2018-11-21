'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
    */
    return [queryInterface.changeColumn('Students', 'updatedAt' , {type:Sequelize.DATE , defaultValue : new Date}),
            queryInterface.changeColumn('Students', 'createdAt' , {type:Sequelize.DATE , defaultValue : new Date})
  ]
  
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};

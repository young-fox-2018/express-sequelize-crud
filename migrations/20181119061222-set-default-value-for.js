'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
    */
    return [
      queryInterface.changeColumn('Teachers', 'createdAt',{type:Sequelize.DATE , defaultValue:new Date}) ,
      queryInterface.changeColumn('Teachers', 'updatedAt',{type:Sequelize.DATE , defaultValue:new Date}) ,
      queryInterface.addColumn('Teachers', 'lastname',{type:Sequelize.STRING})

    ] ;
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
    */
    return [
      queryInterface.changeColumn('Teachers', 'createdAt',{type:Sequelize.DATE} ) ,
      queryInterface.changeColumn('Teachers', 'updatedAt',{type:Sequelize.DATE}) ,
      queryInterface.removeColumn('Teachers', 'lastname')

    ] }
};

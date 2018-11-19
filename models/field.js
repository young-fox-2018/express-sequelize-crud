'use strict';
module.exports = (sequelize, DataTypes) => {
  const Field = sequelize.define('Field', {
    subject_name: DataTypes.STRING
  }, {});
  Field.associate = function(models) {
    // associations can be defined here
  };
  return Field;
};
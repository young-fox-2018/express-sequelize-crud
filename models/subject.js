'use strict';
module.exports = (sequelize, DataTypes) => {
  const Subject = sequelize.define('Subject', {
    subject_name:{ type: DataTypes.STRING,
      validate: {
        isAlphanumeric: true
      }
    }
  }, {});
  Subject.associate = function(models) {
    // associations can be defined here
  };
  return Subject;
};
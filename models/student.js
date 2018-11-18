'use strict';
module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define('Student', {
    first_name: { type: DataTypes.STRING,
      validate: {
        isAlpha: true
      }
    },
    last_name: { type: DataTypes.STRING,
      validate: {
        isAlpha: true
      }
    },
    email: {type: DataTypes.STRING,
      validate: {
        isEmail: true
      }
    }
  }, {});
  Student.associate = function(models) {
    // associations can be defined here
  };
  return Student;
};
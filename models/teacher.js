'use strict';
module.exports = (sequelize, DataTypes) => {
  const Teacher = sequelize.define('Teacher', {
    first_name:{ type: DataTypes.STRING,
      validate: {
        isAlpha: true
      }
    },
    last_name:{ type: DataTypes.STRING,
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
  Teacher.associate = function(models) {
    // associations can be defined here
  };
  return Teacher;
};
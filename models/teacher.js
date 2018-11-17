'use strict';
module.exports = (sequelize, DataTypes) => {
  const Teacher = sequelize.define('Teacher', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: `You just input invalid email!`
        },
        isUnique(value) {
          return Teacher.findOne({
            where: {
              email: value
            }
          })
            .then(data => {
              if (data) {
                throw new Error(`This email has been used by another user!`)
              }
            })
            .catch(err => {
              throw err
            })

        }
      }

    }

  }, {});
  Teacher.associate = function (models) {
    // associations can be defined here
  };
  return Teacher;
};
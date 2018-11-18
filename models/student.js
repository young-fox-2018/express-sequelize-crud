'use strict';
module.exports = (sequelize, DataTypes) => {
    const Student = sequelize.define('Student', {
        first_name: DataTypes.STRING,
        last_name: DataTypes.STRING,
        email: {
            type: DataTypes.STRING,
            validate: {
                isEmail: {
                    args: true,
                    msg: `Missing @ or . when create email!`
                },
                // isUnique(email) {
                //   return Student.findOne({
                //     where: {
                //       email: email
                //     }
                //   })
                //     .then(function (found) {
                //       if (found) {
                //         throw new Error(`Email already exists!`)
                //       }
                //     })
                //     .catch(function (err) {
                //       throw new Error(err)
                //     })
                // }
            }
        }
    }, {});
    Student.associate = function(models) {
        // associations can be defined here
    };
    return Student;
};
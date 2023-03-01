const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Course = sequelize.define('course', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    credits: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
});


// Course.belongsTo(Student)
// Student.hasMany(Course)

module.exports = Course;
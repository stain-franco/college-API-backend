const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');
const Course = require('./Course');

const Student = sequelize.define('student', {
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    program: {
        type: DataTypes.STRING,
        allowNull: false
    },
});
Course.belongsToMany(Student, { through: 'CoursesStudents' });
Student.belongsToMany(Course, { through: 'CoursesStudents' });

// Student.belongsTo(Course)
// Course.hasMany(Student)

module.exports = Student;
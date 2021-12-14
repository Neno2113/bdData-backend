const {  DataTypes } = require('sequelize/dist');
const db = require('../db/connection');

const Department = db.define('Department', {
    deparmentName: {
        type: DataTypes.STRING
    },
});


module.exports = Department;
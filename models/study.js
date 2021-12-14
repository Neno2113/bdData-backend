const { DataTypes } = require('sequelize/dist');
const db = require('../db/connection');


const Study = db.define('Study', {
    secuenceId: {
        type: DataTypes.INTEGER
    },
    studyName: {
        type: DataTypes.STRING
    },
})



module.exports = Study;
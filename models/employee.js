const { DataTypes } = require("sequelize/dist");
const db = require("../db/connection");
const Department = require("./department");
const Study = require("./study");



const Employee = db.define('Employee', {
    employeeName: {
        type: DataTypes.STRING
    },
    employeeLastName: {
        type: DataTypes.STRING,
    },
    departmentId: {
        type: DataTypes.INTEGER
    },
    studyId: {
        type: DataTypes.INTEGER
    },
    sexo: {
        type: DataTypes.BOOLEAN
    },
    idNumber: {
        type: DataTypes.STRING
    },
    address: {
        type: DataTypes.STRING
    },
    homePhone: {
        type: DataTypes.STRING
    },
    mobilePhone: {
        type: DataTypes.STRING
    },
    baseSalary: {
        type: DataTypes.DECIMAL
    },
    discount: {
        type: DataTypes.DECIMAL
    },
    netSalary: {
        type: DataTypes.DECIMAL
    }
});


Department.hasMany( Employee, {
    foreignKey: 'departmentId'
});


Study.hasMany( Employee, {
    foreignKey: 'studyId'
});
Employee.belongsTo( Study );
Employee.belongsTo( Department );


module.exports = Employee;
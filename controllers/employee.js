const { response } = require("express")
const Employee = require('../models/employee');
const Department = require('../models/department');



const getEmployees = async(req, res = response) => {

    const employees = await Employee.findAll({
        include: { model: Department }

    });

    return res.json({
        ok: true,
        employees
    })

}



const storeEmployee = async(req, res = response) => {

    const { body } = req;

    try {

        let employee = await Employee.findOne( { where: { idNumber: body.idNumber }} )
        
        if( employee ){
            return res.status(400).json({
                ok: false,
                msg: 'Este empleado ya esta registrado'
            })
        }


        employee = await Employee.build( body );
        await employee.save();

        const employeeCreated = await Employee.findByPk( employee.id, {
            include: { model: Department}
        } );


        return res.status(201).json({
            ok: true,
            employee: employeeCreated
        })
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: 'Hable con el admin',
        })
        
    }


}



const getEmployee = async(req, res) => {

    const { id } = req.params

    const employee = await Employee.findByPk( id );

    if( employee ){
        return res.json({
            ok: true,
            employee
        })
    } else {
        
        return res.json({
            ok: false,
            msg: 'No existe un Employee con este id ' + id
        })

    }

}


const updateEmployee = async(req, res) => {

    const { id } = req.params
    const { body } = req;

    try {

        let employee = await Employee.findByPk( id )
        
        if( !employee ){
            return res.status(404).json({
                ok: false,
                msg: 'No existe el Employee'
            })
        }



        await employee.update( body, { 
            where: { id }
        });
        await employee.save();


        //updated employee
        const updatedEmployee = await Employee.findByPk( id, {
            include: { model: Department}
        } );


        return res.json({
            ok: true,
            employee: updatedEmployee
        })
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: 'Hable con el admin',
        })
        
    }

}



const deleteEmployee = async(req, res) => {

    const { id } = req.params;
    const employee = await Employee.findByPk( id );

    if( !employee ){
        return res.status(404).json({
            ok: false, 
            msg: 'No existe un Employee con el id ' +id 
        })
    }

    await employee.destroy();


    return res.json({
        ok: true,
        employee
    })

}








module.exports = {
    getEmployee,
    storeEmployee,
    getEmployees,
    updateEmployee,
    deleteEmployee


}
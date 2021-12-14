const { response } = require("express")
const Department = require('../models/department');


const getDepartments = async(req, res = response) => {

    const departments = await Department.findAll();


    return res.json({
        ok: true,
        departments
    })

}



const storeDepartment = async(req, res = response) => {

    const { body } = req;

    // console.log( body );

    try {


        const Department = await Department.build( body );
        await Department.save();

        return res.status(201).json({
            ok: true,
            Department
        })
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: 'Hable con el admin',
        })
        
    }


}



const getDepartment = async(req, res) => {

    const { id } = req.params

    const Department = await Department.findByPk( id );

    if( Department ){
        return res.json({
            ok: true,
            Department
        })
    } else {
        
        return res.json({
            ok: false,
            msg: 'No existe un Department con este id ' + id
        })

    }

}


const updateDepartment = async(req, res) => {

    const { id } = req.params
    const { body } = req;

    try {

        let Department = await Department.findByPk( id )
        
        if( !Department ){
            return res.status(404).json({
                ok: false,
                msg: 'No existe el Department'
            })
        }



        await Department.update( body, { 
            where: { id }
        });
        await Department.save();


        //updated user
        const updatedDepartment = await Department.findByPk( id );


        return res.json({
            ok: true,
            Department: updatedDepartment
        })
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: 'Hable con el admin',
        })
        
    }

}



const deleteDepartment = async(req, res) => {

    const { id } = req.params;
    const Department = await Department.findByPk( id );

    if( !Department ){
        return res.status(404).json({
            ok: false, 
            msg: 'No existe un Department con el id ' +id 
        })
    }

    await Department.destroy();


    return res.json({
        ok: true,
        Department
    })

}








module.exports = {
    getDepartment,
    storeDepartment,
    getDepartments,
    updateDepartment,
    deleteDepartment


}
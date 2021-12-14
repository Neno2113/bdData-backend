const { response } = require("express")
const Study = require('../models/study');


const getStudys = async(req, res = response) => {

    const Studies = await Study.findAll();


    return res.json({
        ok: true,
        Studies
    })

}



const storeStudy = async(req, res = response) => {

    const { body } = req;

    // console.log( body );

    try {


        const Study = await Study.build( body );
        await Study.save();

        return res.status(201).json({
            ok: true,
            Study
        })
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: 'Hable con el admin',
        })
        
    }


}



const getStudy = async(req, res) => {

    const { id } = req.params

    const Study = await Study.findByPk( id );

    if( Study ){
        return res.json({
            ok: true,
            Study
        })
    } else {
        
        return res.json({
            ok: false,
            msg: 'No existe un Study con este id ' + id
        })

    }

}


const updateStudy = async(req, res) => {

    const { id } = req.params
    const { body } = req;

    try {

        let Study = await Study.findByPk( id )
        
        if( !Study ){
            return res.status(404).json({
                ok: false,
                msg: 'No existe el Study'
            })
        }



        await Study.update( body, { 
            where: { id }
        });
        await Study.save();


        //updated user
        const updatedStudy = await Study.findByPk( id );


        return res.json({
            ok: true,
            Study: updatedStudy
        })
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: 'Hable con el admin',
        })
        
    }

}



const deleteStudy = async(req, res) => {

    const { id } = req.params;
    const Study = await Study.findByPk( id );

    if( !Study ){
        return res.status(404).json({
            ok: false, 
            msg: 'No existe un Study con el id ' +id 
        })
    }

    await Study.destroy();


    return res.json({
        ok: true,
        Study
    })

}








module.exports = {
    getStudy,
    storeStudy,
    getStudys,
    updateStudy,
    deleteStudy


}
const express = require("express");
const cors = require('cors');
const db = require("../db/connection");


class Server {

    apiPaths = {
        employeePath: '/api/employee',
        studyPath: '/api/study',
        departmentPath: '/api/department',
    }
    

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
      

        this.dbConnection();

        this.middlewares();

        this.routes();


    }


    middlewares(){

        this.app.use( cors() );

        //json parse
        this.app.use( express.json() );

    }


    async dbConnection(){
        try {
            
            await db.authenticate();
            console.log("Database Online");

        } catch (error) {
            throw new Error( error );
        }
    }




    routes(){

        this.app.use( this.apiPaths.employeePath, require('../routes/employee' ));
        this.app.use( this.apiPaths.studyPath, require('../routes/study' ));
        this.app.use( this.apiPaths.departmentPath, require('../routes/department' ));
    }




    listen(){
        this.app.listen( this.port, () => {
            console.log('Servidor corriendo en puerto: ', this.port );
        })
    }

}



module.exports = Server;
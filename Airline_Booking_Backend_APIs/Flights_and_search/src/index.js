const bodyParser = require("body-parser");
const express = require("express");
const APIroutes=require('./routes/index')

const {PORT} =require('./config/serverConfig');
const {Airport,City,Airplane} = require("./models/index");

const db=require("./models/index");

const setupAndStartServer = async () => {

    //create the express object
    const app = express();  

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    
    app.use('/api',APIroutes);
    app.listen(PORT, async () =>{
        console.log(`Server started at ${PORT} `);

        if (process.env.SYNC_DB){
            db.sequelize.sync({alter:true})
        }

        // await Airplane.create({
        //     modelNumber:'Bombardier CRJ'
        // })
        //because we want to synchronize the tables only once (when I make any new associations), not everytime
    });

    // const airports=await Airport.findAll({
    //     include:City
    // });
    // console.log(airports);

    // const airports=await City.findAll({
    //     where:{
    //         id:9
    //     },
    //     include:[
    //         {
    //             model:Airport
    //         }
    //     ]
    // })

    // const city=await City.findOne({
    //     where:{
    //         id:9
    //     }
    // })

    // const airports=await city.getAirports();

    // // await City.addAirport({
    // //     name: 'Jindal Modern Airport'
    // // })
    // console.log(airports)
}

setupAndStartServer();
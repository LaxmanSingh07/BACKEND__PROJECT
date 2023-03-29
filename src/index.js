const express =require('express');
const bodyParser = require('body-parser');
const {PORT}= require('./config/serverCofig')
const ApiRoutes=require('./routes/index');
const db = require('./models/index');

const {Airport,City}=require('./models/index');
const airport = require('./models/airport');
// const city = require('./models/city');
const setupAndStartServer = async() => {
    //create the express object
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    
    app.use('/api',ApiRoutes) ;
    // const PORT=3000;
    app.listen(PORT, async () => {
        console.log(`Server is running on port ${PORT}`);
        // console.log(process);
        // console.log(process.env);
        // const repo=new CityRepo();
        // repo.createCity({cityName:'Pune'});
        // console.log(repo);


        //Airport
        // const airports=await Airport.findAll({
        //     include:[
        //         {
        //             model:City
        //         }
        //     ]
        // });
        // console.log(airports);
        //enviornment variable
        //in node dotenv is used to set the enviornment variable
        //we should not push the .env file to the github
        
        
        // const result=await City.findOne({
        //     where:{
        //         id:9
        //     }
        // });
        // const airports=await city.getAirport();
        // console.log(result);

        // });
// const airports=await City.findAll({
//     where:{
//         id:2
//     },
//     include:[
//         {
//             model:Airport
//         }
//     ]

//     })
//     // console.log(airports);

//Model Synchronization --> it is used to create the tables in the database
        // db.sequelize.sync({alert:true});
    //     const city=await City.findOne({
    //         where:{
    //         id:2
    //     },
    // });
    // const airports=await city.getAirports();  
    // const newAirport=await city.create({
    //     name:'Pune Airport',
    //     cityId:9
    // })
    // const newAirport=await Airport.findOne({
        //     where:{
            //         id:9
            //     }
            // });
            // await city.addAirport(newAirport);
            // await city.addAirport({
                //     name:'Pune Airport',
                // // })
                // console.log(city);
                // console.log(airports)
                if(process.env.SYNC_DB){
            // db.sequelize.sync({alert:true});
            //PROBLEM IN SYNCING THE DATABASE
            // db.sequelize.sync({force:true}); // it will delete the existing table and create a new table
            
        }
});

}

setupAndStartServer();
const express =require('express');
const bodyParser = require('body-parser');
const {PORT}= require('./config/serverCofig')
const ApiRoutes=require('./routes/index');
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
        });
//enviornment variable
//in node dotenv is used to set the enviornment variable
//we should not push the .env file to the github
 }


setupAndStartServer();
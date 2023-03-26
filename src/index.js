const express =require('express');
const bodyParser = require('body-parser');
const {PORT}= require('./config/serverCofig')
const setupAndStartServer = async() => {
    //create the express object
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    
    // const PORT=3000;
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
        // console.log(process);
        console.log(process.env);
        });
//enviornment variable
//in node dotenv is used to set the enviornment variable
//we should not push the .env file to the github
 }


setupAndStartServer();
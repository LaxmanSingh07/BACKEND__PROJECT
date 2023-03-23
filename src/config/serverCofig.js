const dotenv=require('dotenv'); //this will load the .env file in the root directory
//.config 
dotenv.config(); 

module.exports={
    PORT:process.env.PORT
}
//it is used to connect to the database

const {City}=require('../models/index');
class cityRepo
{
    async createCity({name})
    {
        try{
            const newCity = await City.create({
                // name:name
                //shorthand for the above command is 
                name

            });
            return City;
        }catch(error)
        {
            console.log("Some error occured while creating the City");
            throw {error}
        }
    }
    async deleteCity(cityId)
    {
        try{
            await City.destroy({
                where:{
                    id:cityId
                }});
                return true;
                
            }catch(error)
            {
            console.log("Some error occured while creating the City");
            throw {error}
        }    
    }
    async updateCity(cityId,data){ //{name:""}
        try{
            const city=await City.udate(data,{
                //this is known as the where clause
                where:{
                    id:cityId
                }
            })
        }
        catch(error)
        {
            console.log("Some error occured while updating a city");

        }
    }
   
    async getCity(cityId){
        try{
            const city=await City.findBypk(cityId);
            return city;
        }
        catch(error){
            console.log("Some erro corrured while finding a city");
            throw{error};
        }
    }   
}

module.exports=cityRepo;
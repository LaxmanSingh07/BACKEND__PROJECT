const {cityRepo}=require("../repository/index");

class CityService
{
    constructor(){
        this.cityRepo=new cityRepo();
    }
    async createCity(data)
    {
        
        try{
            const city=await this.cityRepo.createCity(data);
            return city;
        }
        catch(error){
            console.log("Something went  at service layer");
            throw{error};
        }
    }
    async deleteCity(id){
        try{
            const response=this.cityRepo.deleteCity(id);
            return response;
        }
        catch(error){
            console.log("Something went wron at service layer");
            throw{error};
        }
    }
    async updateCity(id,data){
        try{
            const city=this.cityRepo.updateCity(id,data);
            return city;
        }
        catch(error){
            console.log("Something went wron at service layer");
            throw{error};
        }
    }
    async getCity(id)
    {
        try{
            const city=this.cityRepo.getCity(id);
            return city;
        }
        catch(error){
            console.log("Something went wron at service layer");
            throw{error};
        }
    }
    async getAllCities(filter){
        try{
            const cities=await this.cityRepo.getAllCities({name:filter.name});
            return cities;
        }catch(error)
        {
            console.log("Something went wrong at service layer");
            throw(error);
        }
    }
}

module.exports=CityService;
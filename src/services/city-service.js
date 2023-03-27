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
    async deleteCity(){
        try{
            const response=this.cityRepo.deleteCity(cityId);
            return response;
        }
        catch(error){
            console.log("Something went wron at service layer");
            throw{error};
        }
    }
    async updateCity(){
        try{
            const response=this.cityRepo.updateCity(cityId,data);
            return response;
        }
        catch(error){
            console.log("Something went wron at service layer");
            throw{error};
        }
    }
    async getCity()
    {
        try{
            const response=this.cityRepo.getCity(cityId);
            return response;
        }
        catch(error){
            console.log("Something went wron at service layer");
            throw{error};
        }
    }
}

module.exports=CityService;
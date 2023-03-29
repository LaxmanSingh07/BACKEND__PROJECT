//it is used to connect to the database

const { City } = require('../models/index');
const { Op } = require('sequelize');
class cityRepo {
    async createCity({ name }) {
        try {
            const city = await City.create({
                // name:name
                //shorthand for the above command is 
                // name:name
                name:name
            });
            return city;
        } catch (error) {
            console.log("Some error occured while creating the City");
            throw { error }
        }
    }
    async deleteCity(cityId) {
        try {
            await City.destroy({
                where: {
                    id: cityId
                }
            });
            return true;

        } catch (error) {
            console.log("Some error occured while creating the City");
            throw { error }
        }
    }
    async updateCity(cityId, data) { //{name:""}
        try {
            // const city = await City.udate(data, {
            //     //this is known as the where clause
            //     where: {
            //         id: cityId
            //     },
            //     returning:true,
            //     plain:true
            
            // });
            const city=await City.findByPk(cityId);
            city.name=data.name;
            await city.save();
            return city;
        }
        catch (error) {
            console.log("Some error occured while updating a city");
            throw {error}
        }
    }

    async getCity(cityId) {
        try {
            const city = await City.findByPk(cityId);
            return city;
        }
        catch (error) {
            console.log("Some erro corrured while finding a city",error);
            throw { error };
        }
    }
    async getAllCities(filter) { //filter can be empty also
        try {
            if(filter.name)
            {
                const cities=await City.findAll({
                    where:{
                        name:{
                            [Op.startsWith]:filter.name
                        }
                    }
                    
                })
                return cities;
            }
          const cities = await City.findAll();
          return cities;
        } catch (error) {
          console.log("Something went wrong in the repo layer", error);
          throw { error };
        }
      }
}

module.exports = cityRepo;
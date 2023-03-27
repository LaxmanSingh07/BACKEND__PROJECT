const { CityService } = require('../services/city-service');

//contorller is the layer which is responsible for handling the request and response
//controller sometimes is also called as the route handler

/**
* POST 
* data->req.body
*/

const cityService = new CityService();
const create = async (req, res) => {
    try{
        const city = await cityService.createCity(req.body);
        return res.status(201).json({
            data:city,
            success:true,
            message:"City created successfully",
            error:null
        });

    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:"Not able to create the city",
            error:error
        });
    }
}
//DELETE --> /city/:id
const destroy =async (req, res) => {
    try{
        const response = await cityService.deleteCity(req.paramas.id);
        return res.status(200).json({
            data:response,
            success:true,
            message:"City deleted successfully",
            error:{}
        });

    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:"Not able to delete the city",
            error:error
        });
    }
}
//GET --> /city/:id
const get =async (req, res) => {
    try{
        const response = await cityService.getCity(req.paramas.id);
        return res.status(200).json({
            data:response,
            success:true,
            message:"City fetched successfully",
            error:{}
        });

    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:"Not able to get the city",
            error:error
        });
    }
}
//PUT --> /city/:id
const update = async(req, res) => {
        try{
            const response = await cityService.updatetCity(req.paramas.id,req.body);
            return res.status(200).json({
                data:response,
                success:true,
                message:"City fetched successfully",
                error:{}
            });
    
        }
    
    catch(error){
    console.log(error);
    return res.status(500).json({
        data:{},
        success:false,
        message:"Not able to update the city",
        error:error
    })
};
}

module.exports = {
    create, destroy, get, update
}
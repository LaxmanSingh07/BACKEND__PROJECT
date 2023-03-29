const { CityService } = require("../services/index");
// console.log(CityService);
//contorller is the layer which is responsible for handling the request and response
//controller sometimes is also called as the route handler

/**
 * POST
 * data->req.body
 */
//what is the role of the controller
//1. it is responsible for handling the request and response
//2. it is responsible for calling the service layer
//3. it is responsible for sending the response back to the client
//4. it is responsible for sending the error back to the client
//5. it is responsible for sending the success response back to the client

const cityService = new CityService();
const create = async (req, res) => {
    try {
        console.log(req.body);
        const city = await cityService.createCity(req.body);
        return res.status(201).json({
            data: city,
            success: true,
            message: "City created successfully",
            error: {},
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to create the city",
            error: error,
        });
    }
};
//DELETE --> /city/:id

const destroy = async (req, res) => {
    try {
        console.log(req.params.id);
        const response = await cityService.deleteCity(req.params.id);
        return res.status(200).json({
            data: response,
            success: true,
            message: "City deleted successfully",
            error: {},
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to delete the city",
            error: error,
        });
    }
};
//GET --> /city/:id
const get = async (req, res) => {
    try {
        // console.log(req.params.id);
        const response = await cityService.getCity(req.params.id);
        return res.status(200).json({
            data: response,
            success: true,
            message: "City fetched successfully",
            error: {},
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to get the city",
            error: error,
        });
    }
};
//PUT --> /city/:id
const update = async (req, res) => {
    try {
        const response = await cityService.updateCity(req.params.id, req.body);
        return res.status(200).json({
            data: response,
            success: true,
            message: "City fetched successfully",
            error: {},
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to update the city",
            error: error,
        });
    }
};

const getAll = async (req, res) => {
    try {
        console.log(req.query);
        const cities = await cityService.getAllCities(req.query);
        // console.log(cities);
        return res.status(200).json({
            data: cities,
            success: true,
            message: "cities fetched successfully",
            error: {},
        });
    } catch (error) {
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to fetch cities",
            err: error,
        });
    }
};
module.exports = {
    create,
    destroy,
    get,
    update,
    getAll,
};

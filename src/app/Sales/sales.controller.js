const salesService = require("./sales.service.js");




//createSale
const createSale = async (req, res, next) => {
    try {
        const {id} = req.params;
        const {quantity} = req.body;
        const result = await salesService.createSale(id, quantity)
        res.status(201).json({
            message: 'Sales created',
            success: true,
            data: result
        });
    }catch(err) {
        next(err);
    }
};

const getAllSales = async (req, res, next) => {
    try{
        const result = await salesService.getAllSales()
        res.status(200).json({
            message: 'Get All Sales successfully',
            success: true,
            data: result
        })
    }catch(err) {
        next(err);
    }
};

//getSalesByProductId
const getSalesByProductId = async (req, res, next) => {
    try{
        const {ProductId} = req.params;
        const result = await salesService.getSalesByProductId(ProductId)
        res.status(200).json({
            message: 'Get Sales successfully',
            success: true,
            data: result
        })
    }catch (err) {
        next(err);
    }
};



module.exports = {createSale, getAllSales, getSalesByProductId};


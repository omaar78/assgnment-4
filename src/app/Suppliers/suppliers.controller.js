const supplierService = require('./suppliers.service.js');

//createSupplier
const createSupplier = async (req, res, next) => {
    try{
        const {name, number} = req.body;
        const result = await supplierService.createSupplier(name, number);
        res.status(200).json({
            message: `Successfully created supplier`,
            success: true,
            data: result
        });
    }catch(err){
        next(err)
    }
};


//getAllSupplier
const getAllSuppliers = async (req, res, next) => {
    try{
        const result = await supplierService.getAllSuppliers();
        res.status(200).json({
            message: `Successfully getAllSuppliers`,
            success: true,
            data: result
        })
    }catch(err){
        next(err)
    }
};

//updateSupplier
const updateSupplier = async (req, res, next) => {
    try{
        const {name, number} = req.body;
        const {id} = req.params;
        const result = await supplierService.updateSupplier(id, name, number);
        res.status(200).json({
            message: `Successfully updated supplier`,
            success: true,
            data: result
        })
    }catch(err){
        next(err.status(400))
    }
};

//deleteSupplier
const deleteSupplier = async (req, res, next) => {
    try {
        const {id} = req.params;
        const result = await supplierService.deleteSupplier(id);
        res.status(200).json({
            message: `Successfully deleted supplier`,
            success: true,
            data: result
        })
    }catch (err){
    next(err.status(404))
    }
};


module.exports = {createSupplier, getAllSuppliers, updateSupplier, deleteSupplier};



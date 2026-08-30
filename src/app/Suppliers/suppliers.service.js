const supplierRepository = require('./suppliers.repository.js');

//createSupplier
const createSupplier = async (name, number) => {
    if (!name) {
        throw new Error('name is required');
    }
    return await supplierRepository.createSupplier(name, number);
};

//getAllSupplier
const getAllSuppliers = async () => {
    return await supplierRepository.getAllSuppliers();
};

//updateSupplier
const updateSupplier = async (id, name, number) => {
    if (!name){
        return throw new Error("Supplier is required");
    }
    const result = await supplierRepository.updateSupplier(id, name, number);
    if (!result) {
        throw new Error('Supplier is not found');
    }
    return result;
};

//deleteSupplier
const deleteSupplier = async (id) => {
    const result = await supplierRepository.deleteSupplier(id);
    if (!result){
        throw new Error.status(404 ,'Supplier is not found');
    }
};


module.exports = {createSupplier, getAllSuppliers, updateSupplier, deleteSupplier};


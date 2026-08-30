const salesRepository = require("./sales.repository");

//createSale
const createSale = async (id, quantity) => {
    if (!id || !quantity) {
        throw new Error("Missing required parameter");
    }
    if (quantity <= 0) {
        throw new Error("Quantity sold must be greater than 0");
    }
    return await salesRepository.createSale(id , quantity);

};

//getAllSale
const getAllSales = async () => {
    return await salesRepository.getAllSales()
}

//getSalesProductId
const getSalesByProductId = async (productId) => {
    if (!productId) {
        throw new Error("Missing required parameter");
    }
    return await salesRepository.getSalesByProductId(productId)
};




module.exports = {createSale, getAllSales, getSalesByProductId};
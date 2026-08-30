const productsRepository = require("./products.repository");
const productsService = require("./products.repository");

const createProduct = async (product) => {
    return await productsRepository.createProduct(product)
};

const getAllProducts = async () => {
    return await productsService.getAllProducts()
};

const getAllProductById = async (id) => {
    const  product = await productsService.getAllProductById(id);
    if (!product) {
       throw Error.status(404, "Product not found");
    }
    return product;
};

const updateProduct = async (id, product) => {
    const updateProduct = await productsRepository.updateProduct(id, product)
    if (!updateProduct) {
        throw Error.status(404, "Product not found");
    }
    return updateProduct;
};

const deleteProduct = async (id) => {
    const deleteProduct = await productsService.deleteProduct(id);
    if (!deleteProduct) {
        throw Error.status(404, "Product not found");
    }
    return deleteProduct;
};

const updatePrice = async (name, price) => {
    const result = await productsService.updateProduct(name, price);
    if (!name) {
        throw Error.status(404, "Product not found");
    }
    return result;
};

module.exports = {createProduct, getAllProducts, getAllProductById, updateProduct, deleteProduct, updatePrice};
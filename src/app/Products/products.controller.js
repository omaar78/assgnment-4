const productsService = require('./products.service');


const createProduct = async (req, res, next) => {
    try{
        const product = await productsService.createProduct(req.body)
         res.status(201).json({
            message: 'Product created successfully.',
            success: true,
            data: product
        });
    } catch (Error){
        next(Error)
    }
};

const getAllProducts = async (req, res, next) => {
    try{
        const products = await getAllProducts();
        res.status(200).json({
            message: 'All products successfully.',
            success: true,
            data: products
        });
    } catch (Error){
        next(Error)
    }
};

const getAllProductById = async (req, res, next) => {
    try{
        const product = await productsService.getAllProductById(req.params.id);
        res.status(200).json({
            message: 'All products successfully.',
            success: true,
            data: product
        })
    } catch (Error){
        next(Error)
    }
};

const updateProduct = async (req, res, next) => {
    try{
        const id = req.params.id;
        const product = await productsService.updateProduct(id)
        res.status(200).json({
            message: 'Product updated successfully.',
            success: true,
            data: product
        })
    }catch (Error){
        next(Error)
    }
};

const deleteProduct = async (req, res, next) => {
    try{
        const id = req.params.id;
        const product = await productsService.deleteProduct(id)
        res.status(200).json({
            message: 'Product deleted successfully.',
            success: true,
            data: product
        })
    }catch (Error){
        next(Error)
    }
};

const updatePrice = async (req, res, next) => {
    try{
        const {name, price} = req.body;
        const result = await productsService.updatePrice(name, price)
        res.status(200).json({
            message: 'Product updated successfully.',
            success: true,
            data: result
        })
    }catch (err) {
        next(Error)

    }
};

//deleteProductByName
const deleteProductByName = async (req, res, next) => {
    try {
        const {name} = req.body;
        const result = await productsService.deleteProduct(name);
        res.status(200).json({
            message: 'Product deleted successfully.',
            success: true,
        })
    }catch (Error){
        next(Error)
    }
};


module.exports = {createProduct, getAllProducts, getAllProductById, updateProduct, deleteProduct, updatePrice, deleteProductByName};
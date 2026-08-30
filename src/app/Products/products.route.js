const {Router}= require('express');
const {createProduct, getAllProducts, getAllProductById, updateProduct, deleteProduct, updatePrice} = require('products.controller')
const {router} = require("express/lib/application");



const productRouter = Router();

router.post('/', createProduct);

router.get('/', getAllProducts);

router.get('/:id', getAllProductById);

router.put('/:id', updateProduct);

router.delete('/:id', deleteProduct);

router.patch('/price', updatePrice);


module.exports = productRouter;
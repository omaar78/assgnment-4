const {Router} = require('express');
const{createSale, getAllSales, getSalesByProductId} = require('./sales.controller');
const {router} = require("express/lib/application");

const salesRouter = Router();

router.post('/', createSale);
router.get('/', getAllSales);
router.get('/:id', getSalesByProductId);


module.exports = salesRouter;
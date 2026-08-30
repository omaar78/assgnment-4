const { Router} = require('express');
const {createSupplier, getAllSuppliers, updateSupplier, deleteSupplier} = require("./suppliers.controller");
const {router} = require("express/lib/application");



const supplierRouter = Router();

router.post("/", createSupplier);
router.get("/", getAllSuppliers);
router.patch("/:id", updateSupplier);
router.delete("/:id", deleteSupplier);


module.exports = supplierRouter;




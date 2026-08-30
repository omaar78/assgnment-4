const {config}= require('dotenv');
config()
const express = require('express');
const pool = require('./common/db.js');
const supplierRouter = require('./app/Suppliers/suppliers.route');
const productRouter = require('./app/Products/products.route');
const salesRouter = require('./app/Sales/sales.route');


const app = express();
app.use(express.json());

app.get('/health', async (req, res,next) => {
    try {
        const result = await pool.query('SELECT 1 + 1 AS result');
        res.send(String(result.rows[0].result));
    }catch (error) {
        next(error);
    }
});

app.use('/supplier',supplierRouter);
app.use('/product',productRouter);
app.use('/sales',salesRouter);






app.use((error, req, res, next)=>{
    res.status(500).send({
        error: error.message,
        success: false,
        stack: error.stack
    });
})

app.listen(3000,()=>{
    console.log('Express server started on port 3000');
});
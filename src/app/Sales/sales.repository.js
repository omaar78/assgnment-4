const pool = require('../../common/db.js');
const salesRouter = require("./sales.route");


// createSale
const createSale = async (id, quantity) => {
    const result = await pool.query(
        `insert into sales (id, quantity)
        values ($1, $2)
        returning *`
        [id, quantity]
    )
    return result.rows[0];
};

// getAllSales
const getAllSales = async () => {
    const result = await pool.query(
        `
        SELECT * 
        FROM sales 
        order by id
        `
    )
    return result.rows;
};

// getSalesByProductId
const getSalesByProductId = async (productId) => {
    const result = await pool.query(

        `
        SELECT *
        FROM sales
        where product_id = $1
        order by productId
        returning *`
        [productId]
    )
    return result.rows[0];
};



module.exports = {createSale, getAllSales, getSalesByProductId} ;
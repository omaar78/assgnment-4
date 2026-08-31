 const pool =require('../../common/db.js')

 const createProduct = async (name, price, stock) => {
    const {rows} = await pool.query(
        `INSERT INTO product(name, price, stock)
        values ($1, $2, $3) returning *`
        [name, price, stock]
        )
     return rows[0]
 };

const getAllProducts = async () => {
    const result= await pool.query(`
    SELECT * 
    FROM products
    order by id;`
    )
    return result.rows
};

const getAllProductById = async (id) => {
    const result = await pool.query(`
    SELECT *
    FROM products 
    WHERE id = $1`
        [id]
    )
    return result.rows[0]
};

const updateProduct = async (id, product) => {
    const {name, price, stock, supplier_id} = product;
    const result = await pool.query(
        `update product
        set name = $1,
            price = $2,
            stock = $3,
            supplier_id = $4,
            where id = $5`
        [name, price, stock, supplier_id, id]
    );
    return result.rows[0]
};

const deleteProduct = async (id) => {
    const result = await pool.query(
        `DELETE FROM products
        WHERE id = $1
        returning *`
        [id]
    );
    return result.rows[0]
};

 const updatePrice = async (name, price) => {
     const result = await pool.query(
         `UPDATE product
         SET price = $1
         WHERE name = $2
         RETURNING *`
         [price, name]
     );

     return result.rows[0];
 };

 //deleteProduct
 const deleteProductByName = async (name) => {
     const result = await pool.query(`
        DELETE FROM products
        WHERE name = $1
        RETURNING *`
         [name]
     );
     return result.rows[0];
 }


 module.exports = {createProduct, getAllProducts, getAllProductById, updateProduct, deleteProduct, updatePrice, deleteProductByName};
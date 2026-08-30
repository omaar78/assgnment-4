const pool = require('../../common/db.js')

//creat supplier
const createSupplier = async (name, number) => {
    const result = await pool.query(
        `INSERT INTO supplier(name, number)
            VALUES ($1, $2)
                RETURNING *`
                [name, number]
    )
    return result.rows[0]
};

//get all supplier
const getAllSuppliers = async () => {
    const result = await pool.query(
    `
    select * 
    from suppliers
    order by id
    `
    )
    return result.rows;
};

//updateSupplier
const updateSupplier = async (id, name, number) => {
    const result = await pool.query(
        `
        update suppliers 
        SET name = $1,
        number = $2,
        WHERE id = $3
        returning *
        `
        [name, number, id]
    )
    return result.rows[0]
};

//deleteSupplier
const deleteSupplier = async (id) => {
    const result = await pool.query(
        `
        delete from supplier
        where id = $1
        returning *
        `[id]
    )
    return result.rows[0]
};


module.exports = {createSupplier, getAllSuppliers, updateSupplier, deleteSupplier};
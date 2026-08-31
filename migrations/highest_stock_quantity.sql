SELECT
    p.id AS product_id,
    p.name AS product_name,
    p.price,
    p.stock,
    s.name AS supplier_name
FROM
    product p
        LEFT JOIN
    supplier s ON p.supplier_id = s.id
ORDER BY
    p.stock DESC
    LIMIT 1;
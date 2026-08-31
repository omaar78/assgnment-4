SELECT
    p.id AS product_id,
    p.name AS product_name,
    p.price,
    p.stock
FROM
    product p
        LEFT JOIN
    sales s ON p.id = s.product_id
WHERE
    s.id IS NULL
ORDER BY
    p.name ASC;
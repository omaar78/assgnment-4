SELECT
    p.id AS product_id,
    p.name AS product_name,
    COALESCE(SUM(s.quantity), 0) AS total_quantity_sold
FROM
    product p
        LEFT JOIN
    sales s ON p.id = s.product_id
GROUP BY
    p.id,
    p.name
ORDER BY
    total_quantity_sold DESC;
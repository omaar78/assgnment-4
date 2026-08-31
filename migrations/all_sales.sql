SELECT
    s.id AS sale_id,
    p.name AS product_name,
    s.quantity AS quantity_sold,
    s.date AS sale_date
FROM
    sales s
        INNER JOIN
    product p ON s.product_id = p.id
ORDER BY
    s.date DESC;
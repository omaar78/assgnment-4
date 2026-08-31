SELECT
    id AS supplier_id,
    name AS supplier_name,
    number AS supplier_number
FROM
    supplier
WHERE
    name LIKE 'F%'
ORDER BY
    name ASC;
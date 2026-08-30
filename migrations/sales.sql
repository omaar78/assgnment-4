create table sales(
                      id              serial primary key,
                      product_id      int references product(id) on DELETE cascade,
                      quantity        int not null check ( quantity >= 0 ),
                      date            timestamp default now()
);

INSERT INTO sales
(product_id, quantity, date)
VALUES
    (
        (SELECT id FROM product WHERE name = 'Milk'),
        2,
        '2025-05-20'
    );


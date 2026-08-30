create table product(
                        id              serial primary key ,
                        name            text ,
                        price           numeric(5,2) not null check ( price > 0 ),
                        stock           int not null  check ( stock >= 0 ),
                        supplier_id     int references supplier(id) on delete cascade
);

alter table product add column category text;

alter table product drop column category;

alter table product alter column name set not null;

INSERT INTO product
(name, price, stock, supplier_id)
VALUES
    (
        'Milk',
        15.00,
        50,
        (SELECT id FROM supplier WHERE name = 'FreshFoods')
),
    (
        'Bread',
        10.00,
        30,
        (SELECT id FROM supplier WHERE name = 'FreshFoods')
    ),
    (
        'Eggs',
        20.00,
        40,
        (SELECT id FROM supplier WHERE name = 'FreshFoods')
    );
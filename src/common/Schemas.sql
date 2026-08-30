create table supplier(
    id              serial primary key,
    name            text not null ,
    number          varchar(20)
);



create table product(
    id              serial primary key ,
    name            text not null ,
    price           numeric(5,2) not null check ( price > 0 ),
    stock           int not null  check ( stock >= 0 ),
    supplier_id     int references supplier(id) on delete cascade
);



create table sales(
    id              serial primary key,
    product_id      int references product(id) on DELETE cascade,
    quantity        int not null check ( quantity >= 0 ),
    date            timestamp default now()
);

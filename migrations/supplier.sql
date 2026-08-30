create table supplier(
    id              serial primary key,
    name            text not null ,
    number          text
);

alter table supplier alter column number type varchar(15);

INSERT INTO supplier (name, number)
VALUES ('FreshFoods', '01001234567');

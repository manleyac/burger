create database burgers_db;
use burgers_db;

create table burgers(
id int auto_increment,
burger_name varchar(30) not null,
devoured boolean ,
primary key(id)
);
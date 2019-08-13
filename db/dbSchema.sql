drop database if exists story_chain_db;
create database story_chain_db;
use story_chain_db;

create table story(
id int not null auto_increment,
entry varchar(180),
author varchar(50),
deleted boolean,
primary key(id)
);

select * from story;
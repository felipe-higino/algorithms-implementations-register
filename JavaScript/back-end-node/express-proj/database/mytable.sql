--generate a database (collection of tables)
CREATE DATABASE myfirstdb;

-- start CRUDing the tables
USE myfirstdb;

-- create a table inside myfirstdb
CREATE TABLE favoritefilms(
    name VARCHAR(50),
    year INT(4)
);

--Crud create
INSERT INTO favoritefilms(name, year) VALUES ("300", 2006);
INSERT INTO favoritefilms(name, year) VALUES ("Batman:The Dark Knight", 2008);
INSERT INTO favoritefilms(name, year) VALUES ("Matrix", 1999);
INSERT INTO favoritefilms(name, year) VALUES ("Pulp Fiction", 1994);

-- cRud read
SELECT name FROM favoritefilms;
SELECT name FROM favoritefilms WHERE year = 2008; --returns BATMAN

-- crUd update
UPDATE favoritefilms SET name = "new name" WHERE name = "Pulp Fiction";
UPDATE favoritefilms SET name = "Pulp Fiction" WHERE name = "new name";

-- cruD delete
DELETE FROM favoritefilms WHERE year = 2006; --deletes 300 film


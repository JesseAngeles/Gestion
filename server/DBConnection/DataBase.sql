CREATE DATABASE LIBRARY;

USE LIBRARY;

CREATE TABLE author (
    id_author INT(5) NOT NULL AUTO_INCREMENT,
    name VARCHAR(25) NOT NULL,
    lastname VARCHAR(25) NOT NULL,
    PRIMARY KEY (id_author)
);

CREATE TABLE book (
    id_book INT(5) NOT NULL AUTO_INCREMENT,
    title VARCHAR(25) NOT NULL,
    id_author INT(5) NOT NULL,
    price INT(5) NOT NULL,
    stock INT(5) NOT NULL,
    PRIMARY KEY (id_book),
    FOREIGN KEY (id_author) REFERENCES author(id_author) ON DELETE CASCADE
);

INSERT INTO author (name, lastname) 
VALUES ("George Raymond", "Richard Martin"),
        ("Gabriel", "Garcia Marquez"),
        ("Edgar", "Allan Poe"),
        ("Juan", "Rulfo"),
        ("George", "Orwell"),
        ("James", "Dashner");
    
INSERT INTO book (id_book, title, id_author, price, stock)
VALUES (1, "Juego de Tronos", 1, ROUND(RAND() * 100), ROUND(RAND() * 10)),
        (2, "Wild Cards", 1, ROUND(RAND() * 100), ROUND(RAND() * 10)),
        (3, "Cien años de soledad", 2, ROUND(RAND() * 100), ROUND(RAND() * 10)),
        (4, "La hojarasca", 2, ROUND(RAND() * 100), ROUND(RAND() * 10)),
        (5, "El cuervo", 3, ROUND(RAND() * 100), ROUND(RAND() * 10)),
        (6, "El gato negro", 3, ROUND(RAND() * 100), ROUND(RAND() * 10)),
        (7, "Pedro Paramo", 4, ROUND(RAND() * 100), ROUND(RAND() * 10)),
        (8, "El llano en llamas", 4, ROUND(RAND() * 100), ROUND(RAND() * 10)),
        (9, "Rebelion en la granja", 5, ROUND(RAND() * 100), ROUND(RAND() * 10)),
        (10, "1984", 5, ROUND(RAND() * 100), ROUND(RAND() * 10)),
        (11, "The maze runner", 6, ROUND(RAND() * 100), ROUND(RAND() * 10)),
        (12, "El juego infinito", 6, ROUND(RAND() * 100), ROUND(RAND() * 10));
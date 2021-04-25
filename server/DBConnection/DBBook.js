const { Connection } = require('./Connection.js');

class Author {
    constructor() {};

    //Crea un nuevo libro
    CreateBook(title, id_author, price, stock) {
        let connection = new Connection();
        connection = connection.createTheConnection();

        let query = connection.query('INSERT INTO book (title, id_author, price, stock) VALUES (?, ?, ?, ?)', [title, id_author, price, stock], (err, res) => {
            if (err) {
                return callback(false);
            } else {
                return callback(null, true);
            }
        });
        connection.end();
    }

    //Obtiene la informacion de todos los libros
    ReadAllBooks() {
        let connection = new Connection();
        connection = connection.createTheConnection();

        let query = connection.query('SELECT * FROM books', (err, res) => {
            if (err) {
                return callback(false);
            } else if (res.length <= 0) {
                return callback(false);
            } else {
                return callback(null, res);
            }
        })

        connection.end();
    }

    //Obtiene la información de solo un libro
    ReadAuthor(id_book) {
        let connection = new Connection();
        connection = connection.createTheConnection();

        let query = connection.query('SELECT * FROM book WHERE id_book = ?', [id_book], (err, res) => {
            if (err) {
                return callback(false);
            } else if (res.length <= 0) {
                return callback(false);
            } else {
                return callback(null, res);
            }
        })

        connection.end();
    }

    //actualiza la información de un libro
    UpdateBook(id_book, title, id_author, price, stock) {
        let connection = new Connection();
        connection = connection.createTheConnection();

        let query = connection.query('UPDATE book SET title = ?, id_author = ?, price = ?, stock = ? WHERE id_book = ?', [title, id_author, price, stock, id_book], (err, res) => {
            if (err) {
                return callback(false);
            } else {
                return callback(null, true);
            }
        })

        connection.end();
    }

    //Elimina a un autor de forma permanente
    DeleteAuthor(id_book) {
        let connection = new Connection();
        connection = connection.createTheConnection();

        let query = connection.query('DELETE FROM book WHERE id_book = ?', [id_book], (err, res) => {
            if (err) {
                return callback(false);
            } else {
                return callback(null, true);
            }
        })

        connection.end();
    }
}
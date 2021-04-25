const { Connection } = require('./Connection.js');

class Author {
    constructor() {};

    //Crea un nuevo autor
    CreateAuthor(name, lastname) {
        let connection = new Connection();
        connection = connection.createTheConnection();

        let query = connection.query('INSERT INTO author(name, lastname) VALUES (?, ?)', [name, lastname], (err, res) => {
            if (err) {
                return callback(false);
            } else {
                return callback(null, true);
            }
        });
        connection.end();
    }

    //Obtiene la informacion de todos los autores
    ReadAllAuthors() {
        let connection = new Connection();
        connection = connection.createTheConnection();

        let query = connection.query('SELECT * FROM author', (err, res) => {
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

    //Obtiene la información de solo un autor
    ReadAuthor(id_author) {
        let connection = new Connection();
        connection = connection.createTheConnection();

        let query = connection.query('SELECT * FROM author WHERE id_author = ?', [id_author], (err, res) => {
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

    //actualiza la información de un autor
    UpdateAuthor(id_author, name, lastname) {
        let connection = new Connection();
        connection = connection.createTheConnection();

        let query = connection.query('UPDATE author SET name = ?, lastname = ? WHERE id_author = ?', [name, lastname, id_author], (err, res) => {
            if (err) {
                return callback(false);
            } else {
                return callback(null, true);
            }
        })

        connection.end();
    }

    //Elimina a un autor de forma permanente
    DeleteAuthor(id_author) {
        let connection = new Connection();
        connection = connection.createTheConnection();

        let query = connection.query('DELETE FROM author WHERE id_author = ?', [id_author], (err, res) => {
            if (err) {
                return callback(false);
            } else {
                return callback(null, true);
            }
        })

        connection.end();
    }
}
const { io } = require('../server');
const { Connection } = require('../DBConnection/Connection.js');

const { Authors } = require('../DBConnection/DBAuthor');
const author = new Authors();

io.on('connection', (client) => {

    console.log('Usuario conectado');

    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    client.on('authors_connection', (callback) => {
        author.ReadAllAuthors((err, res) => {
            if (err) {
                return callback(false);
            }
            return callback(res);
        })
    })

    client.on('authors_register', (data, callback) => {
        author.CreateAuthor(data.name, data.lastname, (err, res) => {
            if (err) {
                return callback(false);
            }
            return callback(res);
        })
    })

    client.on('author_delete', (data, callback) => {
        author.DeleteAuthor(data, (err, res) => {
            if (err) {
                return callback(false);
            }
            return callback(res);
        })
    })

    client.on('author_update', (data, callback) => {
        author.UpdateAuthor(data.id, data.name, data.lastname, (err, res) => {
            if (err) {
                return callback(false);
            }
            return callback(res);
        })
    })
});
var socket = io();

socket.on('connect', function() {
    console.log('Conectado al servidor');
});

// escuchar
socket.on('disconnect', function() {

    console.log('Perdimos conexión con el servidor');

});

socket.emit('authors_connection', function(res) {
    for (let i = 0; i < res.length; i++) {
        createRecord(res[i].id_author, res[i].name, res[i].lastname);
    }
})

function createRecord(id_author, name, lastname) {
    const record = document.querySelector('#table_authors');
    let tr = document.createElement('tr');
    tr.id = record;

    let td_name = document.createElement('td');
    td_name.textContent = name;

    let td_lastname = document.createElement('td');
    td_lastname.textContent = lastname;

    let td_action = document.createElement('td');

    let btn_update = document.createElement('button');
    btn_update.textContent = "Update";

    let btn_delete = document.createElement('button');
    btn_delete.textContent = "Delete";

    btn_update.id = id_author;
    btn_delete.id = id_author;

    td_action.appendChild(btn_update);
    td_action.appendChild(btn_delete);

    tr.appendChild(td_name);
    tr.appendChild(td_lastname);
    tr.appendChild(td_action);

    record.appendChild(tr);
}

function RegisterAuthor() {
    var author = {
        name: document.getElementById('register_name').value,
        lastname: document.getElementById('register_lastname').value
    };

    socket.emit('authors_register', author, function(res) {
        if (res) {
            console.log(res);
        }
        console.log("jelp");

    });
}
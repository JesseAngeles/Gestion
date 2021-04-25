var socket = io();

var authors = {
    name: "1",
    lastname: "1"
};

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
        authors = res;
    }
})



function createRecord(id_author, name, lastname) {
    const record = document.querySelector('#table_authors');
    let tr = document.createElement('tr');
    tr.id = id_author;

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

    btn_update.addEventListener('click', Update);
    btn_delete.addEventListener('click', Delete);

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
            createRecord(authors[authors.length - 1].id_author + 1, author.name, author.lastname);
            authors.push({
                id_author: authors[authors.length - 1].id_author + 1,
                name: author.name,
                lastname: author.lastname
            });
        }
    });
}

function Ancestro(ancestor, level) {
    if (level == 0) {
        return ancestor;
    } else {
        level--;
        return get_acenstors(ancestor.parentElement, level);
    }
}

function Update(e) {
    let ancestro = Ancestro(e.target, 0);
    var id = ancestro.id;

    for (const author of authors) {
        if (author.id_author == id) {
            document.getElementById('update_id').value = author.id_author;
            document.getElementById('update_name').value = author.name;
            document.getElementById('update_lastname').value = author.lastname;
        }
    }
}

function UpdateAuthor() {
    var author = {
        id: document.getElementById('update_id').value,
        name: document.getElementById('update_name').value,
        lastname: document.getElementById('update_lastname').value
    };

    socket.emit('author_update', author, function(res) {
        if (res) {
            var record = document.getElementById(author.id);
            record.firstChild.textContent = author.name;
            record.firstChild.nextSibling.textContent = author.lastname;
        }
    })
}

function Delete(e) {
    let ancestro = Ancestro(e.target, 0);
    var id = ancestro.id;

    socket.emit('author_delete', id, function(res) {
        if (res) {
            EmptyRecord(id);
        }
    })
}

function EmptyRecord(id) {
    var record = document.getElementById(id);
    record.remove(record.parentNode);
}
var socket = io();

socket.on('connect', function() {
    console.log('Server Conection');
});

socket.on('disconnect', function() {
    console.log("Disconnected from the server");
});
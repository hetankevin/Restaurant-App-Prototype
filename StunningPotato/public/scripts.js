
var socket = io.connect('http://localhost');
socket.on('connect', function() {
    socket.emit('addUser', prompt("What's your name?"));
});
socket.on('updateChat', function (username, data) {
    $('#conversation').append('<b>'+username + ':</b> ' + data + '<br>');
});


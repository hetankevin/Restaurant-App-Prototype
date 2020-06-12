const express = require('express');
const path = require('path');
const socketio = require('socket.io');
const http = require('http')

const app = express();
const server = http.Server(app);
const io = socketio(server);
const port = 8888;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

app.get("/", (request, response) => {
    //response.sendFile(path.join(__dirname, './html/index.html'));
    response.render('html/restaurants', {pageTitle: 'Welcome'});
});

server.listen(port, () => {
    console.log(`Express on port ${port}`);
});
const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

app.get("/", (request, response) => {
    //response.sendFile(path.join(__dirname, './html/index.html'));
    response.render('html/restaurants', {pageTitle: 'Welcome'});
});

app.listen(port, () => {
    console.log(`Express on port ${port}`);
});
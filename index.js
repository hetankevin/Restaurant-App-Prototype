const express = require('express');
//const path = require('path');

const app = express();
const port = 3000;

app.get("/", (request, response) => {
    response.send("Hello world :)");
});

app.listen(port, () => {
    console.log(`Express on port ${port}`);
});
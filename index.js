const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.get("/", (request, response) => {
    response.sendFile(path.join(__dirname, './html/index.html'));
});

app.listen(port, () => {
    console.log(`Express on port ${port}`);
});
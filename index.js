const express = require('express');

const app = express();

app.use(express.static(`public`));
console.log(__dirname);

app.get('/', (req,res) => {
    res.status(200);
    res.sendFile('index.html');
});

app.get('/get', (req, res) => {
    res.status(200);
    res.send('connection');
});

app.listen(3000);
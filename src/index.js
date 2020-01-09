const express = require('express');
const app = express();

var users = [];



app.get('/', function (req, res) {
    res.send('Hello World!');
});


app.get('/users', function (req, res) {
    res.send(users);
    users[0] = { id: 0 };
});

app.post('/user', function (req, res) {
    res.status(200).send({ id: 0 });
});

app.get('/user/:id', function (req, res) {
    res.send({ id: 0 });
});



app.listen(3000, function () { console.log('server is listening') });
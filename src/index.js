const express = require('express');
const app = express();

var users = [];



app.get('/', function (req, res) {
    res.send('Hello World!');
});


app.get('/users', function (req, res) {
    res.send(users);
});

app.post('/user', function (req, res) {
    res.status(200).send(users[0]);
    users.push({ id: 0 });
});

app.get('/user/:id', function (req, res) {
    res.send({ id: 0 });
});

app.delete('/user/:id', function (req, res) {
    users[0] ? res.status(202).send(users) : res.status(204).send();
    users.pop();
});



app.listen(3000, function () { console.log('server is listening') });
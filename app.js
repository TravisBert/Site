var express = require('express');
var app = express();
var path = require('path');
var views = __dirname + '/views/';
const port = 3000;

app.use('/assets', express.static('assets'));

app.get('/', function(req, res) {
    res.sendFile(path.join(views + 'index.html'));
});

app.get('/link', function(req, res) {
    res.sendFile(path.join(views + 'link.html'));
});

app.get('/login', function(req, res) {
    res.sendFile(path.join(views + 'login.html'));
});

app.listen(port, () => console.log(`listening on port ${port}!`))
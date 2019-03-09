const express = require('express')
const app = express()
var path = require('path');
var views = __dirname + '/views/';
const port = 3000

app.use("/style", express.static(__dirname + '/style'));

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

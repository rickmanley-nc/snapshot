// app.js

const express = require('express')

const app = express()

const port = process.env.PORT

var path = require('path');

app.use('/static', express.static('static'));

app.get('/', (req, res) => res.sendFile(path.join(__dirname + '/static/index.html')))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

app.get('/docker', (req, res) => {

  res.send("hello from docker");

});

app.get('/nodemon', (req, res) => res.send("hello from nodemon"))

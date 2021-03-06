const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const notes = require('./routes/note.route');

const app = express();

mongoose.connect('mongodb://mongo:27017/keynotes', {useNewUrlParser: true}, err=> {
  if (err) return console.log('error ' + err);
  console.log('DB connection established');
});

const port = process.env.app_port || 8080;

app.use(express.static('public'));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
  next();
});

//app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());
app.use('/', notes);

// Handle for a 404
app.use(function(req, res, next) {
  return res.status(404).send({ message: 'Route'+req.url+' Not found.' });
});

// Handle for a 500
app.use(function(err, req, res, next) {
  return res.status(500).send({ error: err });
});

app.listen(port, err => {
  if (err) return console.log('Unable to start the server');
  console.log('Server is up and running on port number ' + port);
});
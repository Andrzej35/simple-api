// Dependencies
var express = require('express');
var mongoose = require('mongoose');
//var bodyParser = ('body-parser');

// MongoDB
mongoose.connect('mongodb://localhost/simpleapi_test');

// Express
var app = express();
var port = port || 7070;
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));

// routes
app.use('/api', require('./routes/api'));

// start server
app.listen(port);
console.log('API is running on port ', port);
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var httpServer = require('http').Server(app);
var cors = require('cors');

var port = process.env.PORT || 5000;

var index = require('./routes/index');
var students = require('./routes/students');
var marks = require('./routes/marks');

var mongoose = require('mongoose');
mongoose.connect('mongodb://mongouser:mongopassword@ds041992.mongolab.com:41992/appdb');

app.use(cors({
    allowedOrigins: [
        'http://localhost:3000'
    ]
}));

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

app.use('/', index);
app.use('/api', students);
app.use('/api', marks);

httpServer.listen(port, function(){
    console.log('App listens on localhost: ' + port);
});
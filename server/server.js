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
var grades = require('./routes/grades');

var mongoose = require('mongoose');
mongoose.connect('mongodb://mongouser:mongopassword@ds041992.mongolab.com:41992/appdb');

mongoose.connection.on('connected', function () {
    var Grade = require('./models/grade');

    Grade.remove(function(err,removed) {

        console.log('Grades removed success');
    });

    var grade1 = new Grade();
    grade1.name = "1A";
    grade1.level = 1;

    var grade2 = new Grade();
    grade2.name = "1B";
    grade2.level = 1;

    var grade3 = new Grade();
    grade3.name = "2A";
    grade3.level = 2;

    var grades = [grade1, grade2, grade3];
    grades.forEach(function(grade) {
        grade.save(function(err) {
            if(err)
                res.send(err);

            console.log('Grade created ' + grade.name);
        });

    });
});

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
app.use('/api', grades);

httpServer.listen(port, function(){
    console.log('App listens on localhost: ' + port);
});
var express = require('express');
var router = express.Router();

var Student = require('../models/student');
var Grade = require('../models/grade');


router.route('/students/:student_id/grades/:grade_id')
    .put(function(req, res){
        Student.findById(req.params.student_id, function(err, student){
            if(err)
                res.send(err);
            student.grade = req.params.grade_id;
            student.save(function(err){
                if(err)
                    res.send(err);
                res.json({message: 'Student updated!'});
            });
        });
});
    
router.route('/grades')
    .get(function(req, res){
        Grade.find(function(err, grades){
            if(err)
                re.send(err);
            res.json(grades);
        })
     });
     
module.exports = router;
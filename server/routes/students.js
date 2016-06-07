var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Student = require('../models/student');

router.route('/students')
    .post(function(req, res){
        var student = new Student();
        student.name = req.body.name;
        student.lastName = req.body.lastName;
        student.email = req.body.email;
        student.save(function(err) {
            if(err)
                res.send(err);
            res.json(student);
        })
    })
    
    .get(function(req, res){

        var gradeId = req.query.gradeId;

        var query = Student.find();
        console.log("gradeId " + gradeId)
        query.populate('grade', 'name');

        query.exec(function(err, students) {
            if (err)
                res.send(err);

            if (gradeId) {
                var studentList = [];
                students.forEach(function (item) {

                    console.log("gradeId " + " " + item.grade + " " + gradeId)
                    if (item.grade && item.grade._id == gradeId) {
                        studentList.push(item);
                    }
                })
                res.json(studentList);
            } else {
                res.json(students);
            }
        });

    });
    
router.route('/students/:student_id')
    .get(function(req, res){
        Student.findById(req.params.student_id, function(err, student){
            if(err)
                re.send(err);
            res.json(student);
        })
     })
     .put(function(req, res){
         Student.findById(req.params.student_id, function(err, student){
             if(err)
                res.send(err);
             student.name = req.body.name;
             student.lastName = req.body.lastName;
             student.email = req.body.email;
             student.save(function(err){
                 if(err)
                    res.send(err);
                 res.json({message: 'Student updated!'});
             });
         });
     })
     .delete(function(req, res){
         Student.remove({
             _id: req.params.student_id
         }, function(err, student){
             if(err)
                res.send(err);
             res.json({ message: "Succesfully deleted"});
         })
     });
     
module.exports = router;
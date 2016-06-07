var express = require('express');
var router = express.Router();

var Student = require('../models/student');
var Mark = require('../models/mark');

    
router.route('/students/:student_id/marks')
    .post(function(req,res){
        Student.findById(req.params.student_id, function(err, student){
        
            var mark = new Mark();
            mark.value = req.body.value;
            mark.weight = req.body.weight;
            mark.description = req.body.description;
            mark.student = student._id;
            mark.save(function(err) {
               if(err)
                res.send(err);
            res.json({ message: 'Mark created'});
            })
            
        })
    })
    .get(function(req, res){
        Mark.find({student: req.params.student_id}, function(err, marks){
            if(err)
                re.send(err);
            res.json(marks);
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
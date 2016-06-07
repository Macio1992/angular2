import { Component, Input, OnInit } from '@angular/core';

import { Student } from '../../models/student';
import { Mark } from '../../models/mark';
import { StudentService } from '../../services/student';

@Component({
    selector: 'select-student',
    templateUrl: 'app/components/select-student/select-student.html'
})

export class SelectStudentComponent implements OnInit{
    @Input() student: Student;
    marks: Mark[];
    addedMark = false;
    addingMark: Mark;
    students: Student[];
    error: any;
    
    constructor(private studentService: StudentService){}
    
    ngOnInit(){
        console.log('selectstudent');
        //this.marks = this.student.marks;
    }
    /*
    addMark(addingMark: Mark){
        this.addedMark = true;
        this.addingMark = new Mark();
    }
    
    saveMark(){
        this.student.marks.push(this.addingMark);
        this.studentService.save(this.student).then(student => {
            this.student = student;
        });
    }
    
    deleteMark(savedMark: Mark, event: any){
        var index = this.student.marks.indexOf(savedMark, 0);
        if(index > -1) this.student.marks.splice(index,1);
        this.studentService.save(this.student).then(student => {
            this.student = student;
        });
    }*/
}
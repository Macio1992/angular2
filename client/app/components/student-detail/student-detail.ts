import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { RouteParams } from '@angular/router-deprecated';

import { Student } from '../../models/student';
import { StudentService } from '../../services/student';

@Component({
    selector: 'my-student-detail',
    templateUrl: 'app/components/student-detail/student-detail.html'
})

export class StudentDetailComponent implements OnInit {
    student: Student;
    // students: Student[];
    @Output() close = new EventEmitter();
    //navigated = false;
    error: any;
    
    constructor(private studentService: StudentService, private routeParams: RouteParams){}
    
    ngOnInit(){
        // this.studentService.getStudents().subscribe(
        //     students => this.students = students,
        //     error => console.log(<any>error)
        // )
        //this.navigated = true;
        this.studentService.getStudent(this.routeParams.get('id')).subscribe(student => this.student = student);
        
    }
    
    save(){
        this.studentService.putStudent(this.student).subscribe(
            student => this.student = student,
            error =>  console.log(<any>error)
        );
        
        // this.studentService.putStudent(this.student).subscribe(
        //     student => this.students.forEach((studenti, i) => {
        //         if(studenti._id === student._id){
        //             this.students[i] = student;
        //         }
        //     }),
        //     error => console.log(<any>error)
        // );
        this.goBack(this.student);
    }

    goBack(savedStudent: Student = null) {
        this.close.emit(savedStudent);
        //if(this.navigated) {
            window.history.back();
        //}
    }
}
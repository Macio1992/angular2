import {Component, Input, OnInit} from '@angular/core';
import { NgForm } from '@angular/common';

import { Student } from '../../models/student';
import { StudentService } from '../../services/student';
import {GradeService} from "../../services/grades";
import {Grade} from "../../models/grade";

@Component({
    selector: 'student-form',
    templateUrl: 'app/components/student-form/student-form.html',
    styleUrls: ['app/components/student-form/forms.css'],
    providers: [StudentService, GradeService]
})

export class StudentFormComponent implements OnInit {
    
    submitted = false;
    student = new Student();
    @Input() students: Student[];
    grades: Grade[];
    
    constructor(private studentService: StudentService, private gradeService: GradeService){}
    
    onSubmit(){
        this.submitted = true;
    }

    gradeId;
    active = true;
    newStudent() {
        // this.student = new Student();
        this.studentService.addStudent(this.student).subscribe(
            student => [this.students.push(student),
                this.addStudentToGrade(student._id, this.gradeId)
            ],
            error => console.log(<any>error)
        );
        this.active = false;
        setTimeout(()=> this.active=true, 0);
    }

    getGrades() {
        this.gradeService.getGrades().subscribe(
            grades => this.grades = grades,
            error => console.log(<any>error)
        );
    }

    addStudentToGrade(studentId: string, gradeId: string) {
        this.gradeService.addStudentToGrade(studentId, gradeId).subscribe(
            grade => "",
            error => console.log(<any>error)
        );
    }

    ngOnInit():any {
        this.getGrades();
    }
}
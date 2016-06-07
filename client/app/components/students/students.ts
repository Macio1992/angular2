import { Component, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';

import { Student } from '../../models/student';
import { StudentService } from '../../services/student';
import { StudentDetailComponent } from '../student-detail/student-detail';
import { Mark } from '../../models/mark';
import { SelectStudentComponent } from '../select-student/select-student';
import { StudentFormComponent } from '../student-form/student-form';
import {GradeService} from "../../services/grades";
import {Grade} from "../../models/grade";

@Component({
    selector: 'my-students',
    templateUrl: 'app/components/students/students.html',
    directives: [StudentDetailComponent, SelectStudentComponent, StudentFormComponent],
    providers: [GradeService]
})

export class StudentsComponent implements OnChanges, OnInit {
    students = new Array<Student>();
    // addingStudent: Student;
    //error: any;
    selectedStudent: Student;
    aStudent = false;
    grades = new Array<Grade>();
    
    constructor(private router: Router, private studentService: StudentService, private gradeService: GradeService){
        
    }
    
    getStudents(gradeId: string){
        this.studentService.getStudents(gradeId).subscribe(
            students => this.students = students,
            error => console.log(<any>error)
        )
    }
    
    
    
    addStudent(){
        this.aStudent = true;
        //this.selectedStudent = null;
    }
    
    delete(studentId: string) {
        this.studentService.deleteStudent(studentId).subscribe(
            students => this.students.forEach((t, index) => {
                if(t._id === studentId) { this.students.splice(index,1);}
            }),
            error =>  console.log(<any>error)
        );
    }
    
    close(savedStudent: Student) {
        console.log("fdfsdfsfsdf");
        // this.aStudent = false;
        // //this.students.push(savedStudent);
        // if(savedStudent) this.getStudents();
    }
    
    gotoDetail(student: Student){
        let link = ['StudentDetail', {id: student._id}];
        this.router.navigate(link);
    }
    
    
    onSelect(student: Student){
        this.selectedStudent = student;
        this.aStudent = false;
    }
    
    ngOnChanges(): any{
    }

    getGrades() {
        this.gradeService.getGrades().subscribe(
            grades => this.grades = grades,
            error => console.log(<any>error)
        );
    }
    
    ngOnInit(): any{
        this.getStudents(null);
        this.getGrades();
    }
    
    
};
    
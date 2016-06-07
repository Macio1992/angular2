import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/common';

import { Student } from '../../models/student';
import { StudentService } from '../../services/student';

@Component({
    selector: 'student-form',
    templateUrl: 'app/components/student-form/student-form.html',
    styleUrls: ['app/components/student-form/forms.css'],
    providers: [StudentService]
})

export class StudentFormComponent {
    
    submitted = false;
    student = new Student();
    @Input() students: Student[];
    
    constructor(private studentService: StudentService){}
    
    onSubmit(){
        this.submitted = true;
    }
    
    active = true;
    newStudent() {
        // this.student = new Student();
        this.studentService.addStudent(this.student).subscribe(
            student => this.students.push(this.student),
            error => console.log(<any>error)
        );
        this.active = false;
        setTimeout(()=> this.active=true, 0);
    }
    
}
import { Component, Input, OnInit, OnChanges } from '@angular/core';

import { Student } from '../../models/student';
import { Mark } from '../../models/mark';
import { StudentService } from '../../services/student';
import { MarkService } from '../../services/mark';

@Component({
    selector: 'select-student',
    templateUrl: 'app/components/select-student/select-student.html',
    providers: [MarkService, StudentService]
})

export class SelectStudentComponent implements OnInit, OnChanges{
    @Input() student: Student;
    marks: Mark[];
    addedMark = false;
    addingMark: Mark;
    students: Student[];
    error: any;
    
    constructor(private studentService: StudentService, private markServcie:  MarkService){}
    
    getMarks(id: string){
        this.markServcie.getMarks(id).subscribe(
            marks => this.marks = marks,
            error => console.log(<any>error)
        )
    }
    
    ngOnInit(){
        this.getMarks(this.student._id);
    }
    
    ngOnChanges(){
        this.getMarks(this.student._id);
    }
    
    
    addMark(){
        this.addedMark = true;
        this.addingMark = new Mark();
    }
    
    saveMark(){
        this.markServcie.addMark(this.addingMark, this.student).subscribe(
            mark => this.marks.push(this.addingMark),
            error => console.log(<any>error)
        )
    }
    
    deleteMark(savedMark: Mark, event: any){
        var index = this.marks.indexOf(savedMark, 0);
        
        this.markServcie.deleteMark(savedMark._id).subscribe(
            mark => this.marks.forEach((m, index) => {
                if(m._id === savedMark._id) {
                    this.marks.splice(index, 1);
                }
            }), error => console.log(<any>error)
        );
    }
    
}
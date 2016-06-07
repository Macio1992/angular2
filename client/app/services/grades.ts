import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';

//import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

import { Student } from '../models/student';
import {Grade} from "../models/grade";

@Injectable()
export class GradeService {
    
    //private studentsUrl = 'app/students';
    private gradesUrl = 'http://localhost:5000/api/grades/';
    
    constructor(private http: Http) {}
    
    getGrades(): Observable<Array<Grade>>{
        return this.http.get(this.gradesUrl).map(this.extractData);
    }
    
    private extractData(res: Response) {
        let body = res.json();
        return body|| { };
    }
    
    addStudentToGrade(studentId: string, gradeId: string): Observable<Student>{
        return this.http.put('http://localhost:5000/api/students/' + studentId + "/grades/" + gradeId, null).map(this.extractData);
        
    }

}
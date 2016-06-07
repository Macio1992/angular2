import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

import { Student } from '../models/student';

@Injectable()
export class StudentService { 
    
    private studentsUrl = 'http://localhost:5000/api/students/';
    
    constructor(private http: Http) {}
    
    getStudents(): Observable<Array<Student>>{
        return this.http.get(this.studentsUrl).map(this.extractData);
    }
    
    getStudent(id: string): Observable<Student>{
        let url = `${this.studentsUrl}${id}`;
        return this.http.get(url).map(this.extractData);
    }
    
    private extractData(res: Response) {
        let body = res.json();
        return body|| { };
    }
    
    addStudent(addingStudent: Student): Observable<Student>{
        let body = JSON.stringify(addingStudent);
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});
        
        return this.http.post(this.studentsUrl, body, options).map(this.extractData);
        
    }
    
    deleteStudent(deletingStudentId: string): Observable<Array<Student>>{
        let url = `${this.studentsUrl}${deletingStudentId}`;
        
        return this.http.delete(url).map(this.extractData);
    }
    
    putStudent(student: Student): Observable<Student>{
        let headers = new Headers({'Content-Type': 'application/json'});
        let url = `${this.studentsUrl}${student._id}`;
        
        return this.http.put(url, JSON.stringify(student), { headers: headers}).map(response => response.json());
        
    }
}
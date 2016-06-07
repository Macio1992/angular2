import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';

//import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

import { Student } from '../models/student';

@Injectable()
export class StudentService { 
    
    //private studentsUrl = 'app/students';
    private studentsUrl = 'http://localhost:5000/api/students/';
    
    constructor(private http: Http) {}
    
    getStudents(gradeId: string): Observable<Array<Student>>{
        var url = this.studentsUrl;
        if (gradeId) url+= "?gradeId=" + gradeId;
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
    
    getStudent(id: string): Observable<Student>{
        
        let url = `${this.studentsUrl}${id}`;
        
        return this.http.get(url).map(response => response.json());
        
    }
    
    /*private put(student: Student) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        
        let url = `${this.studentsUrl}/${student._id}`;
        
        return  this.http.put(url, JSON.stringify(student), { headers: headers}).toPromise().then(() => student).catch(this.handleError);
    }*/
    
    /*
    getStudents(): Promise<Student[]> {
        return this.http.get(this.studentsUrl).toPromise().then(response => response.json().data).catch(this.handleError);
    }
    
    
    
    save(student: Student): Promise<Student> {
        if(student.id) {
            return this.put(student);
        }
        return this.post(student);
    }
    
    delete(student: Student) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        
        let url = `${this.studentsUrl}/${student.id}`;
        
        return this.http.delete(url, headers).toPromise().catch(this.handleError);
    }
    
    private post(student: Student): Promise<Student> {
        let headers = new Headers();
        return this.http.post(this.studentsUrl, JSON.stringify(student), {headers: headers}).toPromise().then(res => res.json().data).catch(this.handleError);
    }
    
    
    
    private handleError(error: any){
        console.error('An error occured', error);
        return Promise.reject(error.message || error);
    }*/
    
    
    
}
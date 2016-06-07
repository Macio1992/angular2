import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

import { Student } from '../models/student';
import { Mark } from '../models/mark';

@Injectable()
export class MarkService {
    
    private studentsUrl = 'http://localhost:5000/api/students/';
    private marksUrl = 'http://localhost:5000/api/marks/';
    
    constructor(private http: Http) {}
    
    getMarks(id: string): Observable<Array<Mark>>{
        
        let url = `${this.studentsUrl}${id}/marks`;
        
        return this.http.get(url).map(this.extractData);
    }
    
    private extractData(res: Response) {
        let body = res.json();
        return body|| { };
    }
    
    addMark(addingMark: Mark, student: Student): Observable<Mark>{
        let body = JSON.stringify(addingMark);
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});
        
        let url = `${this.studentsUrl}${student._id}/marks`;
        
        return this.http.post(url, body, options).map(this.extractData);
        
    }
    
    deleteMark(deletingMarkId: string): Observable<Student>{
        
        let url = `${this.marksUrl}${deletingMarkId}`;
        
        return this.http.delete(url).map(this.extractData);
        
    }
    
}
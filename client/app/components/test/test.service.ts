import { Injectable } from '@angular/core';
import { Jsonp, URLSearchParams } from '@angular/http';

@Injectable()
export class TestService{
    
    constructor(private jsonp: Jsonp){}
    
    search(term: string){
        
        let wikiUrl = 'http://en.wiktionary.org/w/api.php';
        
        let params = new URLSearchParams();
        
        params.set('search', term);
        params.set('action', 'opensearch');
        params.set('format', 'json');
        params.set('callback', 'JSONP_CALLBACK');
        
        return this.jsonp.get(wikiUrl, { search: params }).map(request => <string[]> request.json()[1]);
        
    }
}
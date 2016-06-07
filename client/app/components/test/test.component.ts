import { Component }        from '@angular/core';
import { JSONP_PROVIDERS }  from '@angular/http';
import { Observable }       from 'rxjs/Observable';

import { TestService } from './test.service';
 import {Dragula, DragulaService} from 'ng2-dragula/ng2-dragula';
@Component({
  selector: 'my-wiki',
  templateUrl: 'app/components/test/test.component.html',
  providers: [JSONP_PROVIDERS, TestService, DragulaService],
  directives:[Dragula],
  styleUrls: ['app/components/test/test.css']
  
})
export class TestComponent {
    
    items: Observable<string[]>;
    
    constructor (private wikipediaService: TestService, private dragulaServie: DragulaService) {
        dragulaServie.setOptions('first-bag', {
            cancel: true
        });
        
        
        
    }
    
    search (term: string) {
        this.items = this.wikipediaService.search(term);
    }
    
    onClick(item: string){
        
    }
}
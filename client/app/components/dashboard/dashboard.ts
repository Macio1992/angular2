import { Component } from '@angular/core';
import { Router } from '@angular/router-deprecated';

@Component({
    selector: 'my-dashboard',
    templateUrl: 'app/components/dashboard/dashboard.html'
})

export class DashboardComponent {
   
   constructor(private router: Router){}
   
   /*goToLink(){
       let link = ['Students'];
       this.router.navigate(link);
   }*/
    
}
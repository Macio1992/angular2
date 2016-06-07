import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

import { StudentService } from './services/student';
import { StudentsComponent } from './components/students/students';
import { DashboardComponent } from './components/dashboard/dashboard';
import { StudentDetailComponent } from './components/student-detail/student-detail';
import { TestComponent } from './components/test/test.component';

@Component({
    selector: 'my-app',
    template: `
        <nav class="navbar navbar-default">
            <div class="container-fluid">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <p class="navbar-brand">Menu</p>
                </div>
                <div id="navbar" class="navbar-collapse collapse">
                    <ul class="nav navbar-nav">
                        <li><a [routerLink]="['Dashboard']">Home</a></li>
                        <li><a [routerLink]="['Students']">Students</a></li>
                        <li><a [routerLink]="['Test']">Test</a></li>
                    </ul>
                </div>
            </div>
        </nav>
        <router-outlet></router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES],
    providers: [
        ROUTER_PROVIDERS,
        StudentService
    ]
})

@RouteConfig([
    {
        path: '/students',
        name: 'Students',
        component: StudentsComponent
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: DashboardComponent,
        useAsDefault: true
    },
    {
        path: '/detail/:id',
        name: 'StudentDetail',
        component: StudentDetailComponent
    },
    {
        path: '/test',
        name: 'Test',
        component: TestComponent
    }
])

export class AppComponent {}
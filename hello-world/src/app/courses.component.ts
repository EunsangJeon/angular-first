import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
    selector: 'courses',
    template: `
        <h2>{{ "Title: " + getTitle() }}</h2>
        <div>
            <ul>
                <li *ngFor="let course of courses">
                    {{ course }}
                </li>
            </ul>
            <button (click)="onClick($event)">CLICK</button>
            <table>
                <tr>
                    <td [attr.colspan]="colSpan"></td>
                </tr>
            </table>
        </div>
        <div>
            <button class="btn btn-primary" [class.active]="isActive">Save</button>
            <img [src]="imageUrl" />
        </div>
        <div>
            <input (keyup)="onKeyUp($event)" />
            <input (keyup.enter)="onKeyUpEventFilter($event)" />
            <input #email (keyup.enter)="onTemplateVariableEntered(email.value)" />
            <input [(ngModel)]="twoWayValue" (keyup.enter)="onKeyUpTwoWayBinding()" />
        </div>
        <div>
            {{ sampleCourse.title | uppercase | lowercase}} <br/>
            {{ sampleCourse.student | number }} <br/>
            {{ sampleCourse.rating | number:'1.2-2' }} <br/>
            {{ sampleCourse.price | currency:'KRW' }} <br/>
            {{ sampleCourse.releaseDate | date:'shortDate'}} <br/>
        </div>
        <div>
            {{ longText | summary:15 }}
        </div>
    `
})
export class CoursesComponent {
    private title = "List of courses";
    courses;
    imageUrl = "./assets/beatles.jpg";
    colSpan = 2;
    isActive = true;
    twoWayValue = "default@value.com";
    sampleCourse = {
        title: "The Complete Angular Course",
        rating: 4.9815,
        student: 30303,
        price: 150000.25,
        releaseDate: new Date(2020, 4, 22)
    }
    longText="When I find myself in times of trouble, mother Marray comes to me speaking words of wisdom, 'Let it be'. And in my hours of darkness she is standing right in front of me, whisper words of wisdom, let it be. Let it be. Let it be. Let it be. Let it be.";

    constructor(service: CoursesService) {
        this.courses = service.getCourses();
    }

    getTitle() {
        return this.title;
    }

    onClick($event) {
        // to stop event bubbling: $event.stopPropagation();
        console.log("CLICK", $event);
    }

    onKeyUp($event) {
        if ($event.keyCode === 13)
            console.log("Enter was pressed");
    }

    onKeyUpEventFilter($event) {
        console.log($event.target.value);
    }

    onTemplateVariableEntered(email) {
        // component should encapsulate data. so this is not a good approach.
        // furthermore, it doesn't fit to the OOP concept.
        console.log(email)
    }

    onKeyUpTwoWayBinding() {
        //you need to import { FormsModule } from '@angular/forms'; to app.module.ts
        console.log(this.twoWayValue);
    }
}
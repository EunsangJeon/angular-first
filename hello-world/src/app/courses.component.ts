import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
    selector: 'courses',
    template: `
        <h2>{{ "Title: " + getTitle() }}</h2>
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
        <button class="btn btn-primary" [class.active]="isActive">Save</button>
        <img [src]="imageUrl" />
    `
})
export class CoursesComponent {
    private title = "List of courses";
    courses;
    imageUrl = "./assets/beatles.jpg";
    colSpan = 2;
    isActive = true;

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
}
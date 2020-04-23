import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // courses = [1, 2];
  // viewMode="map";
  courses;
  idCount = 4;
  onAdd() {
    let tmpName: string = 'course' + this.idCount.toString();
    this.courses.push({ id: this.idCount, name: tmpName })
    this.idCount += 1;
  }
  onRemove(course) {
    let index = this.courses.indexOf(course);
    this.courses.splice(index, 1);
  }
  onInfect(course) {
    let index = this.courses.indexOf(course);
    this.courses[index].name = 'INFECTED';
  }
  loadCourses() {
    this.courses = [
      { id: 1, name: 'course1' },
      { id: 2, name: 'course2' },
      { id: 3, name: 'course3' },
    ];
  }

  trackCourse(index, course) {
    return course ? course.id : undefined;
  }

  canSave = true;

  task = {
    title: 'Review applications',
    assignee: {
      name: 'John Smith'
    }
  }
}

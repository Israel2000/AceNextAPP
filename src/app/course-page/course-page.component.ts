import { Component, AfterViewInit } from '@angular/core';

declare var M: any; // Materialize CSS

@Component({
  selector: 'app-course-page',
  standalone: true,

  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.css']
})
export class CoursePageComponent implements AfterViewInit {
  ngAfterViewInit() {
    // Check if the code is running in the browser
    if (typeof document !== 'undefined') {
      const elems = document.querySelectorAll('.collapsible');
      M.Collapsible.init(elems);
    }
  }
}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { StudentDashboardComponent } from "./student-dashboard/student-dashboard.component";
import { CoursePageComponent } from "./course-page/course-page.component";
import { SignupComponent } from "./signup/signup.component";
import { HomePageComponent } from './home-page/home-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginComponent, StudentDashboardComponent,CoursePageComponent, SignupComponent, HomePageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'aceNext-app';
}

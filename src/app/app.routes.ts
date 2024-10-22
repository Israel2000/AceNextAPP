import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { CoursePageComponent } from './course-page/course-page.component';  // Corrected import
import { SignupComponent } from './signup/signup.component';
import { HomePageComponent } from './home-page/home-page.component';

export const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'student-dashboard', component: StudentDashboardComponent },
  { path: 'course-page', component: CoursePageComponent },
  { path: 'signup', component: SignupComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirect to login by default
  { path: '**', redirectTo: '/login' } // Wildcard route to handle unknown paths

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

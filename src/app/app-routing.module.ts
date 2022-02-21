import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormFeedbackComponent } from './components/form-feedback/form-feedback.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

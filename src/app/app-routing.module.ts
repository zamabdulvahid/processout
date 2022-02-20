import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormFeedbackComponent } from './components/form-feedback/form-feedback.component';

const routes: Routes = [
  { path: '', redirectTo: '/feedback', pathMatch: 'full' },
  { path: 'feedback', component: FormFeedbackComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

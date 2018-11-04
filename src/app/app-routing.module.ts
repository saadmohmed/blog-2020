import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { ReplyFormComponent } from './reply-form/reply-form.component';

const routes: Routes = [

  { path: 'admin', component: AdminComponent },
  { path: 'login', component: LoginComponent },
  { path: 'reply', component: ReplyFormComponent },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

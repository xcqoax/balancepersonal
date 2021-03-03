import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {HomeComponent } from '../app/components/home/home.component';
import { NewOpComponent} from '../app/components/new-op/new-op.component';
import { ResumeComponent } from '../app/components/resume/resume.component'

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'resume',component:ResumeComponent},
  {path:'newOp',component:NewOpComponent},
  {path:'', pathMatch: 'full', redirectTo:'home'},
  {path:'**', pathMatch: 'full', redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

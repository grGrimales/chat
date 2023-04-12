import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogInComponent } from './log-in/log-in.component';




const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'log-in', component: LogInComponent },
      { path: '**', redirectTo: 'log-in' },


    ]
  }
]
@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  declarations: [
  ]
})
export class AuthRoutingModule { }

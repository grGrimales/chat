import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogInComponent } from './log-in/log-in.component';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,

  ],
  declarations: [
    LogInComponent
  ],
  exports: [
    LogInComponent

  ]
})
export class AuthModule { }

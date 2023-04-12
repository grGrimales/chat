import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [

  //Rutas Públicas
  {
    path: '',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },

  //Rutas Privadas Admin


  // {
  //   path: '**',
  //   redirectTo: '404'
  // },
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],

})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MiComponenteComponent } from './mi-componente/mi-componente.component';
import { MyLoginComponent } from './my-login/my-login.component';

const routes: Routes = [
  {path: 'app-login', component: MyLoginComponent},
  {path: 'app-mi-componente', component: MiComponenteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

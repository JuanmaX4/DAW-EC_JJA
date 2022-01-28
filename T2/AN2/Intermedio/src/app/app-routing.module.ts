import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { InicioComponent } from './inicio/inicio.component';
import { RegistroComponent } from './registro/registro.component';
import { ContraComponent } from './contra/contra.component';
import { VerfCuentaComponent } from './verf-cuenta/verf-cuenta.component';


const routes: Routes = [
  {path: '', redirectTo: 'app-login', pathMatch: 'full'},
  {path: 'app-login', component: LoginComponent},
  {path: 'app-inicio', component: InicioComponent},
  {path: 'app-registro', component: RegistroComponent},
  {path: 'app-contra', component: ContraComponent},
  {path: 'app-verf-cuenta', component: VerfCuentaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

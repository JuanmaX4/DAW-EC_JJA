import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { NgIFComponent } from './ng-if/ng-if.component';
import { NgFORComponent } from './ng-for/ng-for.component';
import { ComunicacionComponenteComponent } from './comunicacion-componente/comunicacion-componente.component';

const routes: Routes = [
  {path: '', redirectTo: 'app-inicio', pathMatch: 'full'},
  {path: 'app-inicio', component: InicioComponent},
  {path: 'app-ngIF', component: NgIFComponent},
  {path: 'app-ngFOR', component: NgFORComponent},
  {path: 'app-Comunicacion-Componente', component: ComunicacionComponenteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

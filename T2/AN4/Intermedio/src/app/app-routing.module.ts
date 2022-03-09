import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeCompComponent } from "./home-comp/home-comp.component";

const routes: Routes = [
  {path: '', redirectTo: 'app-home-comp', pathMatch: 'full'},
  {path: 'app-home-comp', component: HomeCompComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

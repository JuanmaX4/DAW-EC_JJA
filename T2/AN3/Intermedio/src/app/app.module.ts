import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { NgIFComponent } from './ng-if/ng-if.component';
import { NgFORComponent } from './ng-for/ng-for.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    NgIFComponent,
    NgFORComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

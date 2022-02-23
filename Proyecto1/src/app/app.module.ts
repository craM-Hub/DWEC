import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Ej2Component } from './ej2/ej2.component';
import { Ej3Component } from './ej3/ej3.component';
import { Ej4Component } from './ej4/ej4.component';
import { Ej5Component } from './ej5/ej5.component';
import { Ej6Component } from './ej6/ej6.component';
import { Ej7Component } from './ej7/ej7.component';
import { Ej1Component } from './ej1/ej1.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    Ej2Component,
    Ej3Component,
    Ej4Component,
    Ej5Component,
    Ej6Component,
    Ej7Component,
    Ej1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

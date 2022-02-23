import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Ej1Component } from './ej1/ej1.component';
import { Ej2Component } from './ej2/ej2.component';
import { Ej3Component } from './ej3/ej3.component';
import { Ej4Component } from './ej4/ej4.component';
import { Ej5Component } from './ej5/ej5.component';
import { Ej6Component } from './ej6/ej6.component';
import { Ej7Component } from './ej7/ej7.component';


const routes: Routes = [
  { path: "ej1", component: Ej1Component },
  { path: "ej2", component: Ej2Component },
  { path: "ej3", component: Ej3Component },
  { path: "ej4", component: Ej4Component },
  { path: "ej5", component: Ej5Component },
  { path: "ej6", component: Ej6Component },
  { path: "ej7", component: Ej7Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ej2',
  templateUrl: './ej2.component.html',
  styleUrls: ['./ej2.component.css']
})
export class Ej2Component implements OnInit {
  title = "Ejercicio 2";
  resultado = 0;
  numA = 0;
  numB = 0;
  constructor() { }

  ngOnInit(): void {
  }

  sumar() {
    this.resultado = this.numA + this.numB;
  }
}

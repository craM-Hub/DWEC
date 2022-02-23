import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ej1',
  templateUrl: './ej1.component.html',
  styleUrls: ['./ej1.component.css']
})
export class Ej1Component implements OnInit {
  title = 'Bienvenido al proyecto de Marc';
  nombre = 'Marc Llop'
  curso = '2º DAW'
  constructor() { }

  ngOnInit(): void {
  }
}

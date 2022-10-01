import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-suma',
  templateUrl: './suma.component.html',
  styleUrls: ['./suma.component.css'],
})
export class SumaComponent implements OnInit {
  total: number = 0;
  numero1: number = 0;
  numero2: number = 0;
  opcion: number;
  constructor() {}
  ngOnInit(): void {}

  operacion() {
    switch (this.opcion) {
      case 1:
        this.total = this.numero1 + this.numero2;
        break;
      case 2:
        this.total = this.numero1 - this.numero2;
        break;
      case 3:
        this.total = this.numero1 * this.numero2;
        break;
      case 4:
        this.total = this.numero1 / this.numero2;
        break;

      default:
        alert('seleciona una opcion')
        break;
    }
  }
}

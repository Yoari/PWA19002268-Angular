import { Component, OnInit } from '@angular/core';
import { ITabla } from "../tabla";

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css'],
})
export class TablaComponent implements OnInit {
  constructor() {}
  numeroTabla: number = 0;
  ngOnInit(): void {}


  resultados : ITabla[];

  generarTabla(): void {
    this.resultados = [];
    if (this.numeroTabla > 0) {
      for (let index = 1; index <= 10; index++) {
        this.resultados.push({
          numero: this.numeroTabla,
          index: index,
          operacion: '*',
          resultado: this.numeroTabla * index,
        });
      }
    }
  }
}

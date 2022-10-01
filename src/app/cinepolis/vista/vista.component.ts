import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vista',
  templateUrl: './vista.component.html',
  styleUrls: ['./vista.component.css'],
})
export class VistaComponent implements OnInit {
  constructor() {}

  nombre: string;
  cantidadCompradores: number;
  cantidadBoletos: number;
  tarjetaCineco: boolean = false;
  descuento : number;
  precioBoletos : number = 12;

  total : number = 0;

  ngOnInit(): void {}

  tarjetaCinecoValor(valor): void {
    this.tarjetaCineco = valor;
  }

  procesar(): void {
    this.descuento = 0;
    
    if (this.cantidadBoletos > 5) {
      this.descuento += 15;
    }else if(this.cantidadBoletos >= 3 && this.cantidadBoletos <= 5){
      this.descuento += 10;
    }else{
      this.descuento = 0;
    }

    if(this.tarjetaCineco){
      this.descuento += 10;
    }

    if (this.cantidadBoletos < (this.cantidadCompradores * 7)) {
      this.total = this.precioBoletos * this.cantidadBoletos;
      if (this.descuento != 0) {
        this.descuento /= 100 ;
        this.descuento *= this.total ;
        this.total -=  this.descuento;
        
      }

    }else{
      
    }
    
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ejemploAngular';
  pelicula={
    titulo : 'Spiderman',
    fechaLanzamiento : new Date,
    precio : 235.76
  }
  duplicaValor(x : number ):number{
    return x * 2;
  }
}

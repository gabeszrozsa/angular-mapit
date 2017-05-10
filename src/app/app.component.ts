import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
})

export class AppComponent {
  // Start
  lat: number = 47.4808722;
  lng: number = 18.8501225;
  zoom: number = 10;

  // Markers
  markers: marker[] = [
    {
      name:'Gubacsidülő',
      lat: 47.453486,
      lng: 19.098002,
      draggable: true
    },
    {
      name:'Lágymányos',
      lat: 47.472983,
      lng: 19.063669,
      draggable: true
    },
    {
      name:'Albertfalva',
      lat: 47.447914,
      lng: 19.036203,
      draggable: false
    },
  ]

  constructor(){

  }


}

// Marker type
interface marker {
  name?:string // optional
  lat: number;
  lng: number;
  draggable: boolean;
}

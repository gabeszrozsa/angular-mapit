import { Component } from '@angular/core';
import { MarkerService } from './services/marker.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  providers: [MarkerService]
})

export class AppComponent {
  // Start
  lat: number = 47.4808722;
  lng: number = 18.8501225;
  zoom: number = 10;


  markerName:string;
  markerLat:string;
  markerLng:string;
  markerDraggable:string;

  // Markers
  markers: marker[];

  constructor(private _markerService:MarkerService){
    this.markers = _markerService.getMarkers();
  }

  clickedMarker(marker:marker, index:number){
    console.log(`Clicked marker: ${marker.name} at index ${index}`)
  }

  mapClicked($event:any){
    var newMarker = {
      name: 'Untitled',
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: false
    }

    this.markers.push(newMarker)
  }

  markerDragEnd(marker:any, $event:any){
    console.log(`dragEnd`,marker,$event);

    var updMarker = {
      name: marker.name,
      lat: parseFloat(marker.lat),
      lng: parseFloat(marker.lng),
      draggable: false
    }

    var newLat = $event.coords.lat;
    var newLng = $event.coords.lng;
  }

  addMarker(){
    console.log('Adding marker...');
    var isDraggable = (this.markerDraggable === "yes") ? true : false;
    var newMarker = {
      name:this.markerName,
      lat:parseFloat(this.markerLat),
      lng:parseFloat(this.markerLng),
      draggable:isDraggable
    }

    this.markers.push(newMarker);
    this._markerService.addMarker(newMarker);
  }

}

// Marker type
interface marker {
  name?:string // optional
  lat: number;
  lng: number;
  draggable: boolean;
}

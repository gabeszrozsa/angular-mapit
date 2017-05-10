import {Injectable} from '@angular/core';
import {Init} from '../init-markers';

@Injectable()
export class MarkerService extends Init {
  constructor() {
    super();
    console.log('MarkerService Initialized...');
    this.load();
  }

  getMarkers() {
    var markers = JSON.parse(localStorage.getItem('markers'));
    return markers;
  }

  addMarker(newMarker) {
    // fetch markers
    var markers = JSON.parse(localStorage.getItem('markers'));
    // push to array
    markers.push(newMarker);
    // set localStorage
    localStorage.setItem('markers',JSON.stringify(markers));
  }


  updateMarker(marker, newLat, newLng) {
    // fetch markers
    var markers = JSON.parse(localStorage.getItem('markers'));

    for (var i = 0; i < markers.length; i++) {
      if (marker.lat === markers[i].lat && marker.lng === markers[i].lng) {
        markers[i].lat = newLat;
        markers[i].lng = newLng;
      }
    }

    // set localStorage
    localStorage.setItem('markers',JSON.stringify(markers));
  }

  removeMarker(marker) {
    // fetch markers
    var markers = JSON.parse(localStorage.getItem('markers'));

    for (var i = 0; i < markers.length; i++) {
      if (marker.lat === markers[i].lat && marker.lng === markers[i].lng) {
        markers.splice(i,1);
      }
    }

    // set localStorage
    localStorage.setItem('markers',JSON.stringify(markers));
  }




}

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
}

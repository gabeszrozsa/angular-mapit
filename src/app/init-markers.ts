export class Init {
  load() {
    if (localStorage.getItem('markers') === null || localStorage.getItem('markers') === undefined) {
      console.log('No markers found... creating...');

      var markers = [
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

      localStorage.setItem('markers',JSON.stringify(markers));
    } else {
      console.log('Loading markers');
    }
  }
}

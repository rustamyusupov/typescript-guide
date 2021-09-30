interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
}

export class Map {
  private map: google.maps.Map;

  constructor(id: string) {
    this.map = new google.maps.Map(document.getElementById(id), {
      center: {
        lat: 0,
        lng: 0,
      },
      zoom: 1,
    });
  }

  addMarker(mappable: Mappable): void {
    new google.maps.Marker({
      map: this.map,
      position: mappable.location,
    });
  }
}

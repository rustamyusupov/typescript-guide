export interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  content(): string;
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
    const marker = new google.maps.Marker({
      map: this.map,
      position: mappable.location,
    });

    marker.addListener('click', () => {
      const info = new google.maps.InfoWindow({
        content: mappable.content(),
      });

      info.open(this.map, marker);
    });
  }
}

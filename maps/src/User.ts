import faker from 'faker';

export class User {
  name: String;
  location: {
    lat: Number;
    lng: Number;
  };

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: Number(faker.address.latitude()),
      lng: Number(faker.address.longitude()),
    };
  }
}

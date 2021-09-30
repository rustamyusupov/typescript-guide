import faker from 'faker';

export class Company {
  name: String;
  catchPhrase: String;
  location: {
    lat: Number;
    lng: Number;
  };

  constructor() {
    this.name = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: Number(faker.address.latitude()),
      lng: Number(faker.address.longitude()),
    };
  }
}

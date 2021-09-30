import faker from 'faker';

import { Mappable } from './Map';

export class Company implements Mappable {
  name: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: Number(faker.address.latitude()),
      lng: Number(faker.address.longitude()),
    };
  }

  content(): string {
    return `
      <div>
        <h1>Company name: ${this.name}</h1>
        <h3>Catchphrase: ${this.catchPhrase}</h3>
      </div>
    `;
  }
}

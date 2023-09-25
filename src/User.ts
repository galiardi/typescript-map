import { faker } from '@faker-js/faker';

export class User {
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.person.firstName();
    this.location = {
      lng: faker.location.longitude(),
      lat: faker.location.latitude(),
    };
  }

  markerContent() {
    return `User: ${this.name}`;
  }
}

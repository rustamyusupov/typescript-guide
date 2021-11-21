import { Modal } from './Modal';
import { Attributes } from './Attributes';
import { APISync } from './APISync';
import { Eventing } from './Eventing';

interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

const baseUrl = 'http://localhost:3000/users';

export class User extends Modal<UserProps> {
  static buildUser(attrs: UserProps): User {
    return new User(
      new Attributes<UserProps>(attrs),
      new APISync<UserProps>(baseUrl),
      new Eventing()
    );
  }
}

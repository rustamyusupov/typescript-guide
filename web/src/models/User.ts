import { Modal } from './Modal';
import { Attributes } from './Attributes';
import { APISync } from './APISync';
import { Eventing } from './Eventing';
import { Collection } from './Collection';

export interface UserProps {
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

  static buildUserCollection(): Collection<User, UserProps> {
    return new Collection<User, UserProps>(baseUrl, User.buildUser);
  }
}

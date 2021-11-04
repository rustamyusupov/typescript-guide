import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

import { Eventing } from './Eventing';

interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

const baseUrl = 'http://localhost:3000/users';
export class User {
  events: Eventing = new Eventing();

  constructor(private data: UserProps) {}

  get(name: string): number | string {
    return this.data?.[name];
  }

  set(update: UserProps): void {
    Object.assign(this.data, update);
  }

  fetch(): void {
    axios
      .get(`${baseUrl}/${this.get('id')}`)
      .then((response: AxiosResponse): void => this.set(response.data));
  }

  save(): void {
    const params: AxiosRequestConfig = this.get('id')
      ? {
          method: 'put',
          url: `${baseUrl}/${this.get('id')}`,
        }
      : { method: 'post', url: baseUrl };

    axios({ ...params, data: this.data }).then(
      (response: AxiosResponse): void => this.set(response.data)
    );
  }
}

import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

type Callback = () => void;

const baseUrl = 'http://localhost:3000/users';

export class User {
  events: { [key: string]: Callback[] } = {};

  constructor(private data: UserProps) {}

  get(name: string): number | string {
    return this.data?.[name];
  }

  set(update: UserProps): void {
    Object.assign(this.data, update);
  }

  on(name: string, cb: Callback): void {
    const handlers = this.events[name] ?? [];

    handlers.push(cb);
    this.events[name] = handlers;
  }

  trigger(name: string): void {
    const handlers = this.events[name] || [];

    handlers.forEach((cb) => cb());
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

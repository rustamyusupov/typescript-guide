import axios, { AxiosPromise, AxiosRequestConfig, AxiosResponse } from 'axios';

interface HasId {
  id?: number;
}

export class APISync<T extends HasId> {
  constructor(private baseUrl: string) {}

  fetch = (id: number): AxiosPromise => {
    return axios.get(`${this.baseUrl}/${id}`);
  };

  save = (data: T): AxiosPromise => {
    const params: AxiosRequestConfig = data?.id
      ? {
          method: 'put',
          url: `${this.baseUrl}/${data.id}`,
        }
      : { method: 'post', url: this.baseUrl };

    return axios({ ...params, data: data });
  };
}

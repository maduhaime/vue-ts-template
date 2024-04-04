// REF: https://dev.to/blindkai/managing-api-layers-in-vue-js-with-typescript-hno

import axios from 'axios';
import type { AxiosInstance, AxiosError } from 'axios';

const { VITE_API_BASE_URL } = import.meta.env;

export type User = {
  id: number;
  name: string;
  email: string;
};

const axiosInstance = axios.create({
  baseURL: VITE_API_BASE_URL,
});

export class UserService {
  constructor(private httpClient: AxiosInstance) {}

  async getUsers() {
    try {
      const response = await this.httpClient.get<User[]>(`/users`);
      return response.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  handleError(err: unknown) {
    const error = err as AxiosError;
    console.error(`UserService.ts handleError() error: ${error}`);

    // TODO: Handle UX here...
  }
}

export const userService = new UserService(axiosInstance);

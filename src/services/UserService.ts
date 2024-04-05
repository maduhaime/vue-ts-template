// REF: https://dev.to/blindkai/managing-api-layers-in-vue-js-with-typescript-hno

import axios from 'axios';
import type { AxiosInstance } from 'axios';
import { AxiosError } from 'axios';

const { VITE_API_BASE_URL } = import.meta.env;

export type Address = {
  city: string;
};

export type Company = {
  name: string;
};

export type User = {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;

  address: Address;
  company: Company;
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
    } catch (error: unknown) {
      this.handleError(error);
    }
  }

  // TODO: Handle UX here...
  handleError(error: unknown): void {
    let message = 'Unknown Error';
    if (error instanceof AxiosError) message = error.message;
    console.error(`UserService.ts handleError() message: ${message}`);
  }
}

export const userService = new UserService(axiosInstance);

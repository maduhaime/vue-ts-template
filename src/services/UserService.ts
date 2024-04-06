// REF: https://dev.to/blindkai/managing-api-layers-in-vue-js-with-typescript-hno

import axios, { AxiosError } from 'axios';
import type { AxiosInstance } from 'axios';
import type { User } from '@/types/user';

const { VITE_API_BASE_URL } = import.meta.env;

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

  // NOTE: If error are managed globally, Handle UX here...
  handleError(error: unknown) {
    let message = 'Unknown Error';
    if (error instanceof AxiosError) message = error.message;
    console.error(`UserService.ts handleError() message: ${message}`);

    // Error is fowarded to the caller
    throw error;
  }
}

export const userService = new UserService(axiosInstance);

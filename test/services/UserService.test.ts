// stores/counter.spec.ts
import { beforeEach, describe, expect, test, vi } from 'vitest';
import axios, { AxiosError } from 'axios';
import { UserService } from '@/services/UserService';

describe('UserService', () => {
  test('gets users', async () => {
    const mockData = [{ id: 1 }, { id: 2 }];

    const axiosInstance = axios.create();
    axiosInstance.get = vi.fn().mockImplementation(() => Promise.resolve({ data: mockData }));

    const userService = new UserService(axiosInstance);
    expect(await userService.getUsers()).toStrictEqual(mockData);
  });

  test('error', async () => {
    const mockError = new AxiosError('My Error');

    const axiosInstance = axios.create();
    axiosInstance.get = vi.fn().mockRejectedValue(() => {
      throw mockError;
    });

    const userService = new UserService(axiosInstance);
    expect(await userService.getUsers()).toThrow(mockError);
  });
});

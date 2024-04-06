import { describe, expect, test, vi } from 'vitest';
import axios, { AxiosError } from 'axios';
import { UserService } from '@/services/UserService';

describe('UserService', () => {
  test('successfully gets users', async () => {
    const dataMock = [{ id: 1 }, { id: 2 }];

    const axiosInstance = axios.create();
    vi.spyOn(axiosInstance, 'get').mockResolvedValue({ data: dataMock });

    const users = await new UserService(axiosInstance).getUsers();

    expect(axiosInstance.get).toHaveBeenCalledTimes(1);
    expect(axiosInstance.get).toHaveBeenCalledWith('/users');
    expect(users).toStrictEqual(dataMock);
  });

  test('async error on fetching data', async () => {
    const mockError = new AxiosError('Async error');

    const axiosInstance = axios.create();
    vi.spyOn(axiosInstance, 'get').mockRejectedValue(mockError);

    const userService = new UserService(axiosInstance);
    expect(async () => await userService.getUsers()).rejects.toThrowError('Async error');
  });
});

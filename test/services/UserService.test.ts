import { beforeEach, describe, expect, test, vi } from 'vitest';
import axios, { AxiosError } from 'axios';
import { UserService } from '@/services/UserService';

describe('UserService', () => {
  test('gets users', async () => {
    const dataMock = [{ id: 1 }, { id: 2 }];

    const axiosInstance = axios.create();

    // Mocking Resolved Promise on axios.get calls
    // axiosInstance.get = vi.fn().mockImplementation(() => Promise.resolve({ data: mockData }));
    axiosInstance.get = vi.fn().mockResolvedValue({ data: dataMock });

    const userService = new UserService(axiosInstance);
    expect(await userService.getUsers()).toStrictEqual(dataMock);
  });

  test('axios error', async () => {
    const mockError = new AxiosError('Async error');
    const axiosInstance = axios.create();

    // Mocking Rejected Promise on axios.get calls
    // axiosInstance.get = vi.fn().mockImplementation(() => Promise.reject(mockError));
    axiosInstance.get = vi.fn().mockRejectedValue(mockError);

    // Confirmation of successfull mocking
    expect(async () => await axiosInstance.get('/')).rejects.toBe(mockError);

    const userService = new UserService(axiosInstance);

    const handleErrorMock = vi.spyOn(userService, 'handleError');

    await userService.getUsers();

    expect(handleErrorMock).toHaveBeenCalledTimes(1);
    expect(handleErrorMock).toHaveBeenCalledWith(mockError);
  });
});

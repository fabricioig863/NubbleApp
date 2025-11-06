import {api} from '@api';

import {UserAPI} from './userTypes';

const PATH = 'users';

async function getById(userId: string): Promise<UserAPI> {
  const userAPI = await api.get<UserAPI>(`${PATH}/${userId}`);
  return userAPI.data;
}

export const userApi = {
  getById,
};

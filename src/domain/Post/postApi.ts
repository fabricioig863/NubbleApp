import {PageAPI, api} from '@api';

import {ApiPost} from './postAdapter';

async function getList(): Promise<PageAPI<ApiPost>> {
  const response = await api.get<PageAPI<ApiPost>>('/user/post');

  return response.data;
}

export const postApi = {getList};

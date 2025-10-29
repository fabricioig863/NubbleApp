import {PageAPI, PageParams, api} from '@api';

import {ApiPost} from './postAdapter';

async function getList(params: PageParams): Promise<PageAPI<ApiPost>> {
  const response = await api.get<PageAPI<ApiPost>>('/user/post', {
    params,
  });

  return response.data;
}

export const postApi = {getList};

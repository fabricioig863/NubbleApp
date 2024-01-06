import {api} from '@api';
import {PageAPI} from 'src/api/apiTypes';

import {PostAPI} from './postType';

async function getList(): Promise<PageAPI<PostAPI>> {
  await new Promise(resolve => setTimeout(() => resolve(''), 2000));
  const response = await api.get<PageAPI<PostAPI>>('user/post');
  return response.data;
}

export const postAPi = {
  getList,
};

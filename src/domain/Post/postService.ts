import {PageAPI} from '@api';

import {ApiPost, postAdapter} from './postAdapter';
import {postApi} from './postApi';
import {Post} from './postTypes';

async function getList(): Promise<Post[]> {
  const apiResponse: PageAPI<ApiPost> = await postApi.getList();
  return postAdapter.toPostList(apiResponse);
}

export const postService = {
  getList,
};

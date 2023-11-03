import {postAPi} from './postApi';
import {Post} from './types';

async function getList(): Promise<Post[]> {
  const postList = await postAPi.getList();
  return postList;
}

export const postService = {
  getList,
};

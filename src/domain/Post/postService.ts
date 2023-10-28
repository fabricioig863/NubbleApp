import {Post} from './types';
import {postAPi} from './postApi';

async function getList(): Promise<Post[]> {
  const postList = await postAPi.getList();
  return postList;
}

export const postService = {
  getList,
};

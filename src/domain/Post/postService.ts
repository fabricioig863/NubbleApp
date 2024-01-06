import {postAdapter} from './postAdapter';
import {postAPi} from './postApi';
import {Post} from './postType';

async function getList(): Promise<Post[]> {
  const postPageAPI = await postAPi.getList();
  return postPageAPI.data.map(postAdapter.toPost);
}

export const postService = {
  getList,
};

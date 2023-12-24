import {postAdapter} from './postAdapter';
import {postAPi} from './postApi';
import {Post} from './postType';

async function getList(): Promise<Post[]> {
  const postPageAPI = await postAPi.getList();

  console.log(postPageAPI)
  return postPageAPI.data.map(postAdapter.toPost);
}

export const postService = {
  getList,
};

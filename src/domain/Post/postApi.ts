import {postListMock} from './postListMock';
import {Post} from './types';

async function getList(): Promise<Post[]> {
  return await new Promise(resolve => {
    setTimeout(() => {
      resolve(postListMock);
    }, 2000);
  });
}

export const postApi = {getList};

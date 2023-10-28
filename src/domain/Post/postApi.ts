import {Post} from './types';
import {postListMock} from './postListMock';

async function getList(): Promise<Post[]> {
  //TODO: simular um delay na API
  await new Promise(resolve => setTimeout(() => resolve(''), 1000));
  return postListMock;
}

export const postAPi = {
  getList,
};

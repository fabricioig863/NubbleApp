import {PageAPI} from 'src/api/apiTypes';

import {PostAPI} from './postType';

async function getList(): Promise<PageAPI<PostAPI>> {
  let response = await fetch('http://127.0.0.1:3333/user/post', {
    method: 'GET',
    headers: {
      Authorization:
        'Bearer MTE.Z_XdGIYzYjm-95x6hks7yOuXB6IffIkrHQ1GGSW5u_ZECmATmp8b0pYadmZC',
    },
  });

  let data: PageAPI<PostAPI> = await response.json();
  return data;

  // await new Promise(resolve => setTimeout(() => resolve(''), 1000));
  // return data;
}

export const postAPi = {
  getList,
};

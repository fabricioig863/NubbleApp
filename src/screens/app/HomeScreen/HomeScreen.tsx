import React, {useEffect, useState} from 'react';

import {Button, Screen, Text} from '@components';
import {AppTabScreenProps} from '@routes';
import {Post, postService} from '@domain';

export function HomeScreen({navigation}: AppTabScreenProps<'HomeScreen'>) {
  const [postList, setPosList] = useState<Post[]>([]);

  useEffect(() => {
    postService.getList().then(list => setPosList(list));
  }, []);

  return (
    <Screen>
      {postList.map(post => (
        <>
          <Text key={post.id}>{post.author.name}</Text>
        </>
      ))}
    </Screen>
  );
}

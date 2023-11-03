import React from 'react';
import {Dimensions, Image} from 'react-native';

import {Post} from '@domain';

import {Box} from '@components';

import {PostHeader} from './components/PostHeader';

interface Props {
  post: Post;
}

export function PostItem({post}: Props) {
  return (
    <Box marginBottom="s24">
      <PostHeader author={post.author} />
      <Image
        source={{uri: post.imageURL}}
        resizeMode="cover"
        style={{width: Dimensions.get('screen').width, height: 300}}
      />
    </Box>
  );
}

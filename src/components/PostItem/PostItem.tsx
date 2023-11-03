import {Box} from '@components';
import {Post} from '@domain';
import React from 'react';
import {Dimensions, Image} from 'react-native';
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

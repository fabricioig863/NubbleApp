import React from 'react';

import {Post} from '@domain';

import {Box, Text} from '@components';

type Props = Pick<Post, 'author' | 'text' | 'commentCount'>;

export function PostBottom({author: {userName}, text, commentCount}: Props) {
  return (
    <Box mt="s16">
      <Text preset="paragraphMedium">{userName}</Text>
      <Text preset="paragraphMedium">{text}</Text>
      {commentCount > 0 && (
        <Text preset="paragraphSmall" mt="s8" bold color="primary">
          ver {commentCount} comentários
        </Text>
      )}
    </Box>
  );
}

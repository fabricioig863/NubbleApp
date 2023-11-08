import React from 'react';

import {Post} from '@domain';

import {Box, Icon, TouchableOpacityBox, Text, IconProps} from '@components';

type Props = Pick<Post, 'reactionCount' | 'commentCount' | 'favoriteCount'>;

export function PostActions({
  reactionCount,
  commentCount,
  favoriteCount,
}: Props) {
  function likePost() {
    //TODO: Implement like post
  }

  function navigateToComment() {
    //TODO: Implement navigate to comments
  }

  function favoritePost() {
    //TODO: Implement favorite post
  }

  return (
    <>
      <Box flexDirection="row" mt="s16">
        <ItemProps
          marked
          icon={{
            default: 'heart',
            marked: 'heartFill',
          }}
          onPress={likePost}
          text={reactionCount}
        />
        <ItemProps
          marked={false}
          icon={{
            default: 'comment',
            marked: 'comment',
          }}
          onPress={navigateToComment}
          text={commentCount}
        />
        <ItemProps
          marked={false}
          icon={{
            default: 'bookmark',
            marked: 'bookmarkFill',
          }}
          onPress={favoritePost}
          text={favoriteCount}
        />
      </Box>
    </>
  );
}

interface ItemProps {
  onPress: () => void;
  marked: boolean;
  icon: {
    default: IconProps['name'];
    marked: IconProps['name'];
  };
  text: number;
}

function ItemProps({icon, marked, onPress, text}: ItemProps) {
  return (
    <TouchableOpacityBox
      flexDirection="row"
      alignItems="center"
      mr="s24"
      onPress={onPress}>
      <Icon
        color={marked ? 'market' : undefined}
        name={marked ? icon.marked : icon.default}
      />
      {/*
        Meu componente só vai ser renderizado se o valor do
        meu comentário, curtidas e favoritos for maior que zero
      */}
      {text > 0 && (
        <Text preset="paragraphSmall" bold ml="s4">
          {text}
        </Text>
      )}
    </TouchableOpacityBox>
  );
}

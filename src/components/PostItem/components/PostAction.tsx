import {Post} from '@domain';

import {Box, Icon, IconProps, Text, TouchableOpacityBox} from '@components';

type Props = Pick<Post, 'commentCount' | 'reactionCount' | 'favoriteCount'>;

export function PostActions({
  commentCount,
  reactionCount,
  favoriteCount,
}: Props) {
  function likedPost() {
    //TODO: Implement like post
  }

  function navigateToComments() {
    //TODO: Implement navigate to comments
  }

  function favoritePost() {
    //TODO: Implement favorite post
  }

  return (
    <Box flexDirection="row" mt="s16" gap="s24">
      <Item
        marked
        onPress={likedPost}
        icon={{default: 'heart', marked: 'heartFill'}}
        text={reactionCount}
      />
      <Item
        onPress={navigateToComments}
        icon={{default: 'comment', marked: 'comment'}}
        text={commentCount}
      />
      <Item
        onPress={favoritePost}
        icon={{default: 'bookmark', marked: 'bookmarkFill'}}
        text={favoriteCount}
      />
    </Box>
  );
}

interface ItemProps {
  onPress: () => void;
  marked?: boolean;
  icon: {
    default: IconProps['name'];
    marked: IconProps['name'];
  };
  text: number;
}

function Item({onPress, icon, text, marked}: ItemProps) {
  return (
    <TouchableOpacityBox
      flexDirection="row"
      alignItems="center"
      onPress={onPress}>
      <Icon
        color={marked ? 'market' : undefined}
        name={marked ? icon.marked : icon.default}
      />
      {text > 0 && (
        <Text preset="paragraphSmall" bold ml="s4">
          {text}
        </Text>
      )}
    </TouchableOpacityBox>
  );
}

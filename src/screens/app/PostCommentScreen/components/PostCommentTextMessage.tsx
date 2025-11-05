import {useState} from 'react';
import {Alert, Keyboard} from 'react-native';

import {usePostCommentCreate} from '@domain';

import {TextMessage} from '@components';

interface Props {
  postId: number;
  onAddComment: () => void;
}

export function PostCommentTextMessage({postId, onAddComment}: Props) {
  const [message, setMessage] = useState('');
  const {createComment} = usePostCommentCreate(postId, {
    onSuccess: () => {
      onAddComment();
      setMessage('');
      Keyboard.dismiss();
    },
    onError: () => {
      Alert.alert(message);
    },
  });

  return (
    <TextMessage
      placeholder="Adicione um comentário"
      value={message}
      onPressSend={createComment}
      onChangeText={setMessage}
    />
  );
}

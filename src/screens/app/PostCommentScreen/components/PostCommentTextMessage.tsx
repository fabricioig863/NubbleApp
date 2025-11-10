import {useState} from 'react';
import {Alert, Keyboard} from 'react-native';

import {usePostCommentCreate} from '@domain';

import {TextMessage} from '@components';

interface Props {
  postId: number;
}

export function PostCommentTextMessage({postId}: Props) {
  const [message, setMessage] = useState('');
  const {createComment} = usePostCommentCreate(postId, {
    onSuccess: () => {
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

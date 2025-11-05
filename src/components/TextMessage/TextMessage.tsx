import React, {useRef} from 'react';
import {
  Pressable,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
} from 'react-native';

import {$textInputStyle} from '@components';
import {useAppThemeColor} from '@hooks';

import {Box} from '../Box/Box';
import {Text} from '../Text/Text';

interface TextMessageProps extends RNTextInputProps {
  onPressSend: (message: string) => void;
}
export function TextMessage({
  onPressSend,
  value,
  ...rnTextInputProps
}: TextMessageProps) {
  const inputRef = useRef<RNTextInput>(null);
  const {colors} = useAppThemeColor();

  function focusInput() {
    inputRef.current?.focus();
  }

  const messageValue = value || '';
  const sendIsDisabled = messageValue.trim().length === 0;

  function handleSend() {
    if (!sendIsDisabled) {
      onPressSend(messageValue);
    }
  }

  return (
    <Pressable onPressIn={focusInput}>
      <Box
        paddingHorizontal="s16"
        paddingVertical="s14"
        backgroundColor="gray5"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        borderRadius="s12">
        <RNTextInput
          ref={inputRef}
          value={value}
          placeholderTextColor={colors.gray2}
          style={[$textInputStyle, {color: colors.gray1}]}
          {...rnTextInputProps}
        />
        <Pressable disabled={sendIsDisabled} onPress={handleSend}>
          <Text color={sendIsDisabled ? 'gray2' : 'primary'} bold>
            Enviar
          </Text>
        </Pressable>
      </Box>
    </Pressable>
  );
}

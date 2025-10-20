import React from 'react';
import { ActivityIndicator } from '../ActivityIndicator/ActivityIndicator';
import { TouchableOpacityBox, TouchableOpacityBoxProps } from '../Box/Box';
import { Text } from '../Text/Text';
import { buttonPresets } from './buttonPresets';

export type ButtonPreset = 'primary' | 'outline';

interface ButtonProps extends TouchableOpacityBoxProps {
  title: string;
  loading?: boolean;
  preset?: ButtonPreset;
  disable?: boolean;
}

export function Button({
  title,
  loading,
  disable,
  preset = 'primary',
  ...touchableOpacityBoxProps
}: ButtonProps) {
  const buttonPreset = buttonPresets[preset][disable ? 'disabled' : 'default'];

  return (
    <TouchableOpacityBox
      disabled={disable || loading}
      paddingHorizontal="s20"
      borderRadius="s16"
      alignItems="center"
      height={50}
      justifyContent="center"
      {...buttonPreset.container}
      {...touchableOpacityBoxProps}
    >
      {loading ? (
        <ActivityIndicator color={buttonPreset.content} />
      ) : (
        <Text preset="paragraphMedium" bold color={buttonPreset.content}>
          {title}
        </Text>
      )}
    </TouchableOpacityBox>
  );
}

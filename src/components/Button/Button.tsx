import React from 'react';

import {
  ActivityIndicator,
  Text,
  TouchableOpacityBox,
  TouchableOpacityBoxProps,
} from '@components';

import { buttonPresets } from './buttonPresets';

export type ButtonPreset = 'primary' | 'outline';

interface ButtonProps extends TouchableOpacityBoxProps {
  title: string;
  loading?: boolean;
  preset?: ButtonPreset;
}

export function Button({
  title,
  loading,
  preset = 'primary',
  ...touchableOpacityBoxProps
}: ButtonProps) {
  const isDisabled =
    Boolean(touchableOpacityBoxProps.disabled) || Boolean(loading);

  const buttonPreset =
    buttonPresets[preset][isDisabled ? 'disabled' : 'default'];

  return (
    <TouchableOpacityBox
      paddingHorizontal="s20"
      borderRadius="s16"
      alignItems="center"
      height={50}
      justifyContent="center"
      {...buttonPreset.container}
      {...touchableOpacityBoxProps}
      disabled={isDisabled}
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

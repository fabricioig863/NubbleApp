import React from 'react';

import {
  ActivityIndicator,
  Text,
  TouchableOpacityBox,
  TouchableOpacityBoxProps,
} from '@components';

import {buttonPresets} from './buttonPresets';

export type ButtonPreset = 'primary' | 'outline';

export interface ButtonProps extends TouchableOpacityBoxProps {
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
      testID="button"
      paddingHorizontal="s20"
      borderRadius="s16"
      alignItems="center"
      height={50}
      justifyContent="center"
      disabled={isDisabled}
      {...buttonPreset.container}
      {...touchableOpacityBoxProps}>
      {loading ? (
        <ActivityIndicator
          testID="activity-indicator"
          color={buttonPreset.content}
        />
      ) : (
        <Text preset="paragraphMedium" bold color={buttonPreset.content}>
          {title}
        </Text>
      )}
    </TouchableOpacityBox>
  );
}

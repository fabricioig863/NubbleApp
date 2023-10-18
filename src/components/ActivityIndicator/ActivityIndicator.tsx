import React from 'react';
import {
  ActivityIndicator as RNActivityIndicator,
  ActivityIndicatorProps,
} from 'react-native';
import {ThemeColors} from '../../themes/themes';
import {useAppTheme} from '@hooks';

interface Props extends Omit<ActivityIndicatorProps, 'color'> {
  color: ThemeColors;
}

export function ActivityIndicator({color}: Props) {
  const {colors} = useAppTheme();

  return <RNActivityIndicator color={colors[color]} />;
}

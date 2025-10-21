import React from 'react';
import {
  ActivityIndicator as RNActivityIndicator,
  ActivityIndicatorProps as RNActivityIndicatorProps,
} from 'react-native';
import { useAppThemeColor } from '../../hooks/useAppThemeColor';
import { ThemeColors } from '../../theme/theme';

interface ActivityIndicatorProps
  extends Omit<RNActivityIndicatorProps, 'color'> {
  color: ThemeColors;
}

export function ActivityIndicator({
  color = 'primary',
  ...activityIndicatorProps
}: ActivityIndicatorProps) {
  const { colors } = useAppThemeColor();
  return (
    <RNActivityIndicator color={colors[color]} {...activityIndicatorProps} />
  );
}

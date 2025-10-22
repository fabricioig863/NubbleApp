import React from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { Theme } from '../../theme/theme';

import { useNavigation } from '@react-navigation/native';
import { useAppSafeArea } from '../../hooks/useAppSafeAre';
import { useAppThemeColor } from '../../hooks/useAppThemeColor';
import { Box, TouchableOpacityBox } from '../Box/Box';
import { Icon } from '../Icon/Icon';
import { Text } from '../Text/Text';
import {
  ScrollViewContainer,
  ViewContainer,
} from './components/ScreenContainer/ScreenContainer';

interface ScreenProps {
  children: React.ReactNode;
  canGoBack?: boolean;
  scrollable?: boolean;
  paddingHorizontal?: keyof Theme['spacing'];
}

export function Screen({
  children,
  canGoBack = false,
  scrollable = false,
  paddingHorizontal,
}: ScreenProps) {
  const { bottom, top } = useAppSafeArea();
  const { colors } = useAppThemeColor();

  const navigation = useNavigation();

  const Container = scrollable ? ScrollViewContainer : ViewContainer;
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <Container backgroundColor={colors.background}>
        <Box
          paddingBottom="s24"
          paddingHorizontal={paddingHorizontal}
          style={{ paddingTop: top, paddingBottom: bottom }}
        >
          {canGoBack && (
            <TouchableOpacityBox
              onPress={navigation.goBack}
              mb="s24"
              flexDirection="row"
            >
              <Icon name="arrowLeft" color="primary" />
              <Text preset="paragraphMedium" semiBold ml="s8">
                Voltar
              </Text>
            </TouchableOpacityBox>
          )}
          {children}
        </Box>
      </Container>
    </KeyboardAvoidingView>
  );
}

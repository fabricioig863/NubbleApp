import React from 'react';

import {Button, Screen, Text} from '@components';
import {AppScreenProps} from '@routes';

export function SettingScreen({navigation}: AppScreenProps<'SettingsScreen'>) {
  return (
    <Screen paddingHorizontal="s24" canGoBack>
      <Text preset="headingSmall">Settings Screen</Text>
      <Button
        title="New Post"
        onPress={() =>
          navigation.navigate('AppTabNavigator', {
            screen: 'NewPostScreen',
          })
        }
      />
    </Screen>
  );
}

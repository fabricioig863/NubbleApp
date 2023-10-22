import React from 'react';

import {Button, Screen, Text} from '@components';
import {AppScreenProps} from '@routes';

export function SettingsScreen({navigation}: AppScreenProps<'SettingsScreen'>) {
  return (
    <Screen canGoBack>
      <Text preset="headingLarge">Setting Screen</Text>
      <Button title="voltar" onPress={() => navigation.goBack()} />
    </Screen>
  );
}

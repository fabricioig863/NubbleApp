import React from 'react';

import {useAuthSignOut} from '@domain';

import {Button, Screen, Text} from '@components';
import {AppScreenProps} from '@routes';

export function SettingScreen({navigation}: AppScreenProps<'SettingsScreen'>) {
  const {signOut, isLoading} = useAuthSignOut();

  return (
    <Screen paddingHorizontal="s24" canGoBack>
      <Text preset="headingSmall">Settings Screen</Text>
      <Button
        loading={isLoading}
        title="Sair da conta"
        onPress={signOut}
        marginTop="s24"
      />
    </Screen>
  );
}

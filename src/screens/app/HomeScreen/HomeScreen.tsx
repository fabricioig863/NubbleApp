import React from 'react';

import {Button, Screen, Text} from '@components';
import {AppTabScreenProps} from '@routes';

export function HomeScreen({navigation}: AppTabScreenProps<'HomeScreen'>) {
  return (
    <Screen paddingHorizontal="s24">
      <Text preset="headingLarge">Home Screen</Text>
      <Button
        title="Navegar"
        onPress={() => navigation.navigate('SettingsScreen')}
        mb="s10"
      />
      <Button
        title="Navegar"
        onPress={() => navigation.navigate('FavoriteScreen')}
      />
    </Screen>
  );
}

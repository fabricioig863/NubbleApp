import React from 'react';

import {useNavigation} from '@react-navigation/native';

import {Button, Screen, Text} from '@components';

export function MyProfileScreen() {
  const navigation = useNavigation();

  function toNavigationSettings() {
    navigation.navigate('SettingsScreen');
  }

  return (
    <Screen paddingHorizontal="s24">
      <Text preset="headingSmall">My Profile Screen</Text>
      <Button onPress={toNavigationSettings} title="Vai pra lá" />
    </Screen>
  );
}

import React from 'react';

import {useNavigation} from '@react-navigation/native';
import {useAuthCredentials} from '@services';

import {Box, Icon, Screen, Text} from '@components';

export function MyProfileScreen() {
  const navigation = useNavigation();
  const {authCredentials} = useAuthCredentials();
  const name = authCredentials?.user.fullName;

  function toNavigationSettings() {
    navigation.navigate('SettingsScreen');
  }

  return (
    <Screen paddingHorizontal="s24">
      <Box
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center">
        {name && <Text preset="headingMedium">{name}</Text>}
        <Icon name="settings" onPress={toNavigationSettings} />
      </Box>
    </Screen>
  );
}

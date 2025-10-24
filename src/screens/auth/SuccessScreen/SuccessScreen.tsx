import { Button, Icon, Screen, Text } from '@components';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '@routes';
import React from 'react';

type SuccessScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'SuccessScreen'
>;

export function SuccessScreen({ route, navigation }: SuccessScreenProps) {
  function goBackToBegin() {
    //TODO: implement navigation to the initial screen
    navigation.goBack();
  }

  return (
    <Screen canGoBack paddingHorizontal="s24">
      <Icon
        name={route.params.icon.name}
        color={route.params.icon.color}
        size={48}
      />
      <Text preset="headingLarge" mt="s24" bold>
        {route.params.title}
      </Text>
      <Text preset="paragraphLarge" mt="s16">
        {route.params.description}
      </Text>
      <Button onPress={goBackToBegin} title="Voltar ao início" mt="s40" />
    </Screen>
  );
}

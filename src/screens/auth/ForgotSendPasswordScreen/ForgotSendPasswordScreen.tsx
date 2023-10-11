import React from 'react';
import {Screen} from '../../../components/Screen/Screen';
import {Icon} from '../../../components/Icon/Icon';
import {Text} from '../../../components/Text/Text';
import {Button} from '../../../components/Button/Button';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootParamList} from '../../../routes/Routes';

type ScreenProps = NativeStackScreenProps<
  RootParamList,
  'ForgotSendPasswordScreen'
>;

export function ForgotSendPasswordScreen({navigation, route}: ScreenProps) {
  function goBack() {
    navigation.navigate('LoginScreen');
  }

  const routes = route.params;
  return (
    <Screen>
      <Icon {...routes.icon} boxProps={{mb: 's16'}} />

      <Text preset="headingLarge">{routes.title}</Text>

      <Text preset="paragraphLarge" mt="s16">
        {routes.description}
      </Text>

      <Button onPress={goBack} title="Voltar ao início" mt="s40" />
    </Screen>
  );
}

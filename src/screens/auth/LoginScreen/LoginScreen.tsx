import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Button } from '../../../components/Button/Button';
import { PasswordInput } from '../../../components/PasswordInput/PasswordInput';
import { Screen } from '../../../components/Screen/Screen';
import { Text } from '../../../components/Text/Text';
import { TextInput } from '../../../components/TextInput/TextInput';
import { RootStackParamList } from '../../../routes/Routes';

type NavigationProps = NativeStackScreenProps<
  RootStackParamList,
  'LoginScreen'
>;

export function LoginScreen({ navigation }: NavigationProps) {
  function navigationToSignUp() {
    navigation.navigate('SignUpScreen');
  }

  function navigationToForgotPassword() {
    navigation.navigate('ForgotPasswordScreen');
  }

  return (
    <Screen scrollable paddingHorizontal="s24">
      <Text preset="headingLarge">Olá!</Text>
      <Text mb="s8" preset="paragraphLarge" marginBottom="s40">
        Digite seu e-mail e senha para entrar
      </Text>

      <TextInput
        label="E-mail"
        placeholder="Digite seu e-mail"
        boxProps={{ mb: 's20' }}
      />

      <PasswordInput
        label="Senha"
        placeholder="Digite sua senha"
        boxProps={{ mb: 's8' }}
      />

      <Text
        onPress={navigationToForgotPassword}
        preset="paragraphSmall"
        bold
        color="primary"
        mb="s40"
      >
        Esqueci minha senha
      </Text>

      <Button marginTop="s48" title="Entrar" />
      <Button
        onPress={navigationToSignUp}
        preset="outline"
        marginTop="s12"
        title="Criar uma conta"
      />
    </Screen>
  );
}

import React from 'react';
import {Text} from '../../../components/Text/Text';
import {TextInput} from '../../../components/TextInput/TextInput';
import {Button} from '../../../components/Button/Button';
import {Screen} from '../../../components/Screen/Screen';
import {PasswordInput} from '../../../components/PasswordInput/PasswordInput';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootParamList} from '../../../routes/Routes';
import {TouchableOpacityBox} from '../../../components/Box/Box';

type LoginProps = NativeStackScreenProps<RootParamList, 'LoginScreen'>;

export function LoginScreen({navigation}: LoginProps) {
  function submitForm() {
    navigation.navigate('SinupScreen');
  }

  function toGoForgotPasswordScreen() {
    navigation.navigate('ForgotPasswordScreen');
  }

  return (
    <Screen scrollable>
      <Text marginBottom="s8" preset="headingLarge">
        Olá!
      </Text>

      <Text preset="paragraphLarge" mb="s40">
        Digite seu e-mail e senha para entrar
      </Text>

      <TextInput
        errorMessage="Mensagem de erro"
        label="E-mail"
        placeholder="Digite seu e-mail"
        boxProps={{mb: 's20'}}
      />

      <PasswordInput
        label="Senha"
        placeholder="Digite sua senha"
        boxProps={{mb: 's10'}}
      />

      <TouchableOpacityBox onPress={toGoForgotPasswordScreen}>
        <Text color="primary" preset="paragraphSmall" bold>
          Esqueci minha senha
        </Text>
      </TouchableOpacityBox>

      <Button title="Entrar" mt="s48" />
      <Button
        onPress={submitForm}
        title="Criar uma conta"
        preset="outline"
        mt="s12"
      />
    </Screen>
  );
}

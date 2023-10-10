import React from 'react';
import {Screen} from '../../../components/Screen/Screen';
import {Text} from '../../../components/Text/Text';
import {TextInput} from '../../../components/TextInput/TextInput';
import {Button} from '../../../components/Button/Button';

export function ForgotPasswordScreen() {
  return (
    <Screen canGoBack>
      <Text preset="headingLarge" mb="s16">
        Esqueci minha senha
      </Text>

      <Text preset="paragraphLarge" mb="s16">
        Digite seu e-mail e enviaremos as instruções para redefinição de senha
      </Text>

      <TextInput label="E-mail" />

      <Button title="Recuperar senha" mt="s48" />
    </Screen>
  );
}

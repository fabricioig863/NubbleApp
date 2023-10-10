import React from 'react';
import {Text} from '../../../components/Text/Text';
import {Screen} from '../../../components/Screen/Screen';
import {TextInput} from '../../../components/TextInput/TextInput';
import {Button} from '../../../components/Button/Button';
import {PasswordInput} from '../../../components/PasswordInput/PasswordInput';

export function SinupScreen() {
  function submitForm() {
    //implementar quando chegarmos no react hook form
  }
  return (
    <Screen canGoBack scrollable>
      <Text marginBottom="s32" preset="headingLarge">
        Criar uma conta
      </Text>

      <TextInput label="Seu username" placeholder="@" boxProps={{mb: 's20'}} />

      <TextInput
        label="Nome completo"
        placeholder="Digite seu nome completo"
        boxProps={{mb: 's20'}}
      />

      <TextInput
        label="E-mail"
        placeholder="Digite seu e-mail"
        boxProps={{mb: 's20'}}
      />

      <PasswordInput placeholder="Digite sua senha" label="Senha" />

      <Button onPress={submitForm} title="Criar minha conta" mt="s48" />
    </Screen>
  );
}

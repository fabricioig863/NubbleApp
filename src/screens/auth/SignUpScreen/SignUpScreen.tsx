import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Button } from '../../../components/Button/Button';
import { PasswordInput } from '../../../components/PasswordInput/PasswordInput';
import { Screen } from '../../../components/Screen/Screen';
import { Text } from '../../../components/Text/Text';
import { TextInput } from '../../../components/TextInput/TextInput';
import { useResetNavigationSuccess } from '../../../hooks/useResetNavigationSuccess';
import { RootStackParamList } from '../../../routes/Routes';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'SignUpScreen'>;

export function SignUpScreen(props: ScreenProps) {
  const { reset } = useResetNavigationSuccess();
  function handleSubmit() {
    reset({
      title: 'Sua conta foi criada com sucesso!',
      description: 'Agora é só fazer login na nossa plataforma',
      icon: {
        name: 'checkRoundIcon',
        color: 'success',
      },
    });
  }

  return (
    <Screen canGoBack scrollable paddingHorizontal="s24">
      <Text preset="headingLarge" marginBottom="s32">
        Criar uma conta
      </Text>

      <TextInput
        label="Seu username"
        placeholder="@"
        boxProps={{ mb: 's20' }}
      />

      <TextInput
        label="Nome completo"
        placeholder="Digite seu nome completo"
        boxProps={{ mb: 's20' }}
      />

      <TextInput
        label="E-mail"
        placeholder="Digite seu e-mail"
        boxProps={{ mb: 's20' }}
      />

      <PasswordInput
        label="Senha"
        placeholder="Digite sua nova senha"
        boxProps={{ mb: 's48' }}
      />

      <Button
        onPress={handleSubmit}
        preset="primary"
        marginTop="s12"
        title="Criar uma conta"
      />
    </Screen>
  );
}

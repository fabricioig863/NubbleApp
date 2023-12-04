import React from 'react';

import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';

// import { AuthScreenProps } from '@routes';

import {
  Text,
  Screen,
  Button,
  FormPasswordInput,
  FormTextInput,
} from '@components';

import {SignUpSchema, signUpSchema} from './signUpSchema';

// interface Props extends AuthScreenProps<'SinupScreen'> {}

export function SinupScreen() {
  const {control, formState, handleSubmit, reset} = useForm<SignUpSchema>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      username: '',
      fullName: '',
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  function submitForm(formValueProps: SignUpSchema) {
    console.log(formValueProps);
    reset();
    // reset({
    //   title: 'Sua conta foi criada com sucesso!',
    //   description: 'Agora é só fazer login na nossa plataforma',
    //   icon: {
    //     name: 'checkRound',
    //     color: 'success',
    //   },
    // });
  }

  return (
    <Screen canGoBack scrollable>
      <Text marginBottom="s32" preset="headingLarge">
        Criar uma conta
      </Text>

      <FormTextInput
        control={control}
        label="Seu username"
        name="username"
        placeholder="@"
        boxProps={{mb: 's20'}}
      />

      <FormTextInput
        control={control}
        label="Nome completo"
        name="fullName"
        autoCapitalize="words"
        placeholder="Digite seu nome completo"
        boxProps={{mb: 's20'}}
      />

      <FormTextInput
        control={control}
        label="E-mail"
        name="email"
        placeholder="Digite seu e-mail"
        boxProps={{mb: 's20'}}
      />

      <FormPasswordInput
        control={control}
        label="Senha"
        name="password"
        placeholder="Digite uma senha válida"
        boxProps={{mb: 's48'}}
      />

      <Button
        disabled={!formState.isValid}
        onPress={handleSubmit(submitForm)}
        title="Criar minha conta"
        mt="s48"
      />
    </Screen>
  );
}

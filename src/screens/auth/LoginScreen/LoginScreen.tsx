import React from 'react';

import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';

import {
  Button,
  FormPasswordInput,
  FormTextInput,
  Screen,
  Text,
} from '@components';
import {AuthScreenProps} from '@routes';

import {LoginSchema, loginSchema} from './loginSchema';

export function LoginScreen({navigation}: AuthScreenProps<'LoginScreen'>) {
  const {control, formState, handleSubmit} = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  function submitForm(data: LoginSchema) {
    console.log(data.email, data.password);
  }

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

      <FormTextInput
        control={control}
        name="email"
        rules={{
          required: 'E-mail obrigatório',
          pattern: {
            value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
            message: 'E-mail inválido',
          },
        }}
        label="E-mail"
        placeholder="Digite seu e-mail"
        boxProps={{mb: 's20'}}
      />

      <FormPasswordInput
        control={control}
        name="password"
        rules={{required: 'Senha obrigatória'}}
        label="Senha"
        placeholder="Digite sua senha"
        boxProps={{mb: 's12'}}
      />

      <Text
        onPress={navigationToForgotPassword}
        preset="paragraphSmall"
        bold
        color="primary"
        mb="s40">
        Esqueci minha senha
      </Text>

      <Button
        disabled={!formState.isValid}
        onPress={handleSubmit(submitForm)}
        marginTop="s48"
        title="Entrar"
      />
      <Button
        onPress={navigationToSignUp}
        preset="outline"
        marginTop="s12"
        title="Criar uma conta"
      />
    </Screen>
  );
}

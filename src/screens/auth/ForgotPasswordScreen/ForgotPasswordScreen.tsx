import React from 'react';

import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';

import {Button, FormTextInput, Screen, Text} from '@components';

// import {AuthScreenProps} from '@routes';

import {
  ForgotPasswordSchema,
  forgotPasswordSchema,
} from './forgotPasswordSchema';

// interface Props extends AuthScreenProps<'ForgotPasswordScreen'> {}

export function ForgotPasswordScreen() {
  const {control, formState, handleSubmit, reset} =
    useForm<ForgotPasswordSchema>({
      resolver: zodResolver(forgotPasswordSchema),
      defaultValues: {
        email: '',
      },
      mode: 'onChange',
    });
  // const {reset} = useResetNavigationSuccess();

  function submit({email}: ForgotPasswordSchema) {
    console.log(email);
    reset();
    // reset({
    //   title: `Enviamos as instruções para seu ${'\n'}e-mail`,
    //   description:
    //     'Clique no link enviado no seu e-mail para recuperar sua senha',
    //   icon: {
    //     name: 'messageRound',
    //     color: 'primary',
    //   },
    // });
  }
  return (
    <Screen canGoBack>
      <Text preset="headingLarge" mb="s16">
        Esqueci minha senha
      </Text>

      <Text preset="paragraphLarge" mb="s32">
        Digite seu e-mail e enviaremos as instruções para redefinição de senha
      </Text>

      <FormTextInput
        control={control}
        label="E-mail"
        name="email"
        placeholder="Digite seu e-mail"
        boxProps={{mb: 's20'}}
      />

      <Button
        disabled={!formState.isValid}
        onPress={handleSubmit(submit)}
        title="Recuperar senha"
      />
    </Screen>
  );
}

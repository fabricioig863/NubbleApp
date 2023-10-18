import React from 'react';
import {Screen} from '../../../components/Screen/Screen';
import {Text} from '../../../components/Text/Text';
import {Button} from '../../../components/Button/Button';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../routes/Routes';
import {FormTextInput} from '../../../components/Form/FormTextInput';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {
  ForgotPasswordSchema,
  forgotPasswordSchema,
} from './forgotPasswordSchema';

type ScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'ForgotPasswordScreen'
>;

export function ForgotPasswordScreen(params: ScreenProps) {
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

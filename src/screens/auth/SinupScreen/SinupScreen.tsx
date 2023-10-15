import React from 'react';
import {Text} from '../../../components/Text/Text';
import {Screen} from '../../../components/Screen/Screen';
import {TextInput} from '../../../components/TextInput/TextInput';
import {Button} from '../../../components/Button/Button';
import {PasswordInput} from '../../../components/PasswordInput/PasswordInput';
import {useResetNavigationSuccess} from '../../../hooks/useResetNavigationSuccess';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../routes/Routes';
import {Controller, useForm} from 'react-hook-form';
import {Alert} from 'react-native';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'SinupScreen'>;

type SinupFormType = {
  username: string;
  fullName: string;
  email: string;
  password: string;
};

export function SinupScreen({navigation}: ScreenProps) {
  const {reset} = useResetNavigationSuccess();
  const {control, formState, handleSubmit} = useForm<SinupFormType>({
    defaultValues: {
      username: '',
      fullName: '',
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  function submitForm({username, fullName, email, password}: SinupFormType) {
    const data = Alert.alert(
      `${username} ${'\n'} ${fullName} ${'\n'} ${email} ${'\n'} ${password}`,
    );

    reset({
      title: 'Sua conta foi criada com sucesso!',
      description: 'Agora é só fazer login na nossa plataforma',
      icon: {
        name: 'checkRound',
        color: 'success',
      },
    });
  }
  return (
    <Screen canGoBack scrollable>
      <Text marginBottom="s32" preset="headingLarge">
        Criar uma conta
      </Text>

      <Controller
        control={control}
        name="username"
        rules={{
          required: 'Digite um username válido',
        }}
        render={({field: {onChange, value}, fieldState: {error}}) => (
          <TextInput
            errorMessage={error?.message}
            label="Seu username"
            value={value}
            onChangeText={onChange}
            placeholder="@"
            boxProps={{mb: 's20'}}
          />
        )}
      />

      <Controller
        control={control}
        name="fullName"
        rules={{
          required: 'Digite um nome válido',
        }}
        render={({field: {onChange, value}, fieldState: {error}}) => (
          <TextInput
            value={value}
            errorMessage={error?.message}
            onChangeText={onChange}
            label="Nome completo"
            placeholder="Digite seu nome completo"
            boxProps={{mb: 's20'}}
          />
        )}
      />

      <Controller
        control={control}
        name="email"
        rules={{
          required: 'E-mail obrigatorio',
          pattern: {
            value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
            message: 'Digite um e-mail válido',
          },
        }}
        render={({field: {onChange, value}, fieldState: {error}}) => (
          <TextInput
            errorMessage={error?.message}
            value={value}
            onChangeText={onChange}
            label="E-mail"
            placeholder="Digite seu E-mail"
            boxProps={{mb: 's20'}}
          />
        )}
      />

      <Controller
        control={control}
        name="password"
        rules={{
          required: 'Digite uma senha válida',
          minLength: {
            value: 8,
            message: 'Senha deve conter no minimo 8 caracteres',
          },
        }}
        render={({field: {onChange, value}, fieldState: {error}}) => (
          <PasswordInput
            errorMessage={error?.message}
            value={value}
            onChangeText={onChange}
            label="Senha"
            placeholder="Digite uma senha válida"
            boxProps={{mb: 's48'}}
          />
        )}
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

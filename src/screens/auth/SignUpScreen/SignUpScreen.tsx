import React, { useState } from 'react';
import { Box, TouchableOpacityBox } from '../../../components/Box/Box';
import { Button } from '../../../components/Button/Button';
import { Icon } from '../../../components/Icon/Icon';
import { Screen } from '../../../components/Screen/Screen';
import { Text } from '../../../components/Text/Text';
import { TextInput } from '../../../components/TextInput/TextInput';

export function SignUpScreen() {
  const [passwordValue, setPasswordValue] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  function handlePasswordChange(text: string) {
    console.log('password input:', text);
    setPasswordValue(text);
  }

  function togglePasswordVisibility() {
    setIsPasswordVisible(prev => !prev);
  }

  function handleSubmit() {
    //Todo: implement sign up logic
  }

  return (
    <Screen canGoBack scrollable>
      <Box paddingHorizontal="s24">
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

        <TextInput
          RightComponent={
            <TouchableOpacityBox onPress={togglePasswordVisibility}>
              <Icon
                name={isPasswordVisible ? 'eyeOff' : 'eyeOn'}
                color="gray2"
              />
            </TouchableOpacityBox>
          }
          value={passwordValue}
          secureTextEntry={!isPasswordVisible}
          onChangeText={handlePasswordChange}
          label="Senha"
          placeholder="Digite sua senha"
          boxProps={{ mb: 's48' }}
        />

        <Button
          onPress={handleSubmit}
          preset="primary"
          marginTop="s12"
          title="Criar uma conta"
        />
      </Box>
    </Screen>
  );
}

import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Box } from '../../../components/Box/Box';
import { Button } from '../../../components/Button/Button';
import { Icon } from '../../../components/Icon/Icon';
import { Text } from '../../../components/Text/Text';
import { TextInput } from '../../../components/TextInput/TextInput';

export function LoginScreen() {
  return (
    <SafeAreaView>
      <Box paddingHorizontal="s24">
        <Text preset="headingLarge">Olá!</Text>
        <Text mb="s8" preset="paragraphLarge" marginBottom="s40">
          Digite seu e-mail e senha para entrar
        </Text>

        <TextInput
          label="E-mail"
          placeholder="Digite seu e-mail"
          boxProps={{ mb: 's20' }}
        />

        <TextInput
          RightComponent={<Icon color="gray2" name="eyeOn" />}
          label="Senha"
          placeholder="Digite sua senha"
          boxProps={{ mb: 's10' }}
        />

        <Text color="primary" preset="paragraphSmall" bold>
          Esqueci minha senha
        </Text>

        <Button marginTop="s48" title="Entrar" />
        <Button preset="outline" marginTop="s12" title="Criar uma conta" />
      </Box>
    </SafeAreaView>
  );
}

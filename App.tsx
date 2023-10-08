import React from 'react';
import {SafeAreaView} from 'react-native';
import {Text} from './src/components/Text/Text';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from './src/themes/themes';
import {Box} from './src/components/Box/Box';
import {Button} from './src/components/Button/Button';
import {TextInput} from './src/components/TextInput/TextInput';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <Box paddingHorizontal="s24">
          <Text marginBottom="s8" preset="headingLarge">
            Olá!
          </Text>
          <Text preset="paragraphLarge" mb="s40">
            Digite seu e-mail e senha para entrar
          </Text>

          <Box mb="s20">
            <TextInput label="E-mail" placeholder="Digite seu e-mail" />
          </Box>
          <Box>
            <TextInput label="Senha" placeholder="Digite sua senha" />
          </Box>
          <Text color="primary" preset="paragraphSmall" bold mt="s10">
            Esqueci minha senha
          </Text>

          <Button title="Entrar" mt="s48" />
          <Button title="Criar uma conta" preset="outline" mt="s12" />
        </Box>
      </SafeAreaView>
    </ThemeProvider>
  );
}

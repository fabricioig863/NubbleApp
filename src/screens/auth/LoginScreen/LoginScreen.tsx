import React from 'react';
import {Text} from '../../../components/Text/Text';
import {SafeAreaView, View} from 'react-native';
import {TextInput} from '../../../components/TextInput/TextInput';
import {Icon} from '../../../components/Icon/Icon';
import {Button} from '../../../components/Button/Button';

export function LoginScreen() {
  return (
    <SafeAreaView>
      <View style={{paddingHorizontal: 24}}>
        <Text marginBottom="s8" preset="headingLarge">
          Olá!
        </Text>
        <Text preset="paragraphLarge" mb="s40">
          Digite seu e-mail e senha para entrar
        </Text>

        <TextInput
          errorMessage="Mensagem de erro"
          label="E-mail"
          placeholder="Digite seu e-mail"
          boxProps={{mb: 's20'}}
        />

        <TextInput
          label="Senha"
          placeholder="Digite sua senha"
          secureTextEntry
          RightComponent={<Icon color="gray2" name="eyeOn" />}
          boxProps={{mb: 's10'}}
        />

        <Text color="primary" preset="paragraphSmall" bold>
          Esqueci minha senha
        </Text>

        <Button title="Entrar" mt="s48" />
        <Button title="Criar uma conta" preset="outline" mt="s12" />
      </View>
    </SafeAreaView>
  );
}

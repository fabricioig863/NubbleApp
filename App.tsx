import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {Text} from './src/components/Text/Text';
import {Button} from './src/components/Button/Button';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from './src/themes/themes';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <View style={{paddingHorizontal: 24, marginTop: 50}}>
          <Button title="Entrar" />
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
}

import React from 'react';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from './src/themes/themes';
import {LoginScreen} from './src/screens/auth/LoginScreen/LoginScreen';
import {SafeAreaProvider} from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <LoginScreen />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

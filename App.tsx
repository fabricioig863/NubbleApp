import React from 'react';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from './src/themes/themes';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {SinupScreen} from './src/screens/auth/SinupScreen/SinupScreen';
import {LoginScreen} from './src/screens/auth/LoginScreen/LoginScreen';

export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <LoginScreen />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

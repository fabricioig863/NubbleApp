import React from 'react';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from './src/themes/themes';
import {LoginScreen} from './src/screens/auth/LoginScreen/LoginScreen';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <LoginScreen />
    </ThemeProvider>
  );
}

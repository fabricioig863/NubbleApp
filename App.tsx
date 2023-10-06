import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {Text} from './src/components/Text/Text';
import {Button} from './src/components/Button/Button';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from './src/themes/themes';
import {Box} from './src/components/Box/Box';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <View style={{paddingHorizontal: 24}}>
          <Text preset="headingLarge">Coffstack</Text>
          <Box marginTop="s20">
            <Button title="Entrar" marginBottom="s20" />

            <Button preset="outline" title="Outline" marginBottom="s20" />

            <Button title="Entrar" loading />
          </Box>
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
}

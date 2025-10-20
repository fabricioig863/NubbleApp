import { ThemeProvider } from '@shopify/restyle';
import { View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Box } from './src/components/Box/Box';
import { Button } from './src/components/Button/Button';
import { Text } from './src/components/Text/Text';
import { theme } from './src/theme/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1 }}>
          <View style={{ paddingHorizontal: 24 }}>
            <Text preset="headingLarge" italic>
              CoffStack
            </Text>
            <Box marginBottom="s24">
              <Button title="Entrar" />
            </Box>
            <Button loading title="Carregando..." />

            <Box mt="s20">
              <Button
                title="Entrar"
                marginBottom="s12"
                backgroundColor="grayBlack"
              />
            </Box>
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}

export default App;

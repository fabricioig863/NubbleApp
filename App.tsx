import { ThemeProvider } from '@shopify/restyle';
import { View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Icon } from './src/components/Icon/Icon';
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

            <Icon name="eyeOn" />
            <Icon name="eyeOff" />
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}

export default App;

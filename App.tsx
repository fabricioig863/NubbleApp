import { ThemeProvider } from '@shopify/restyle';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { LoginScreen } from './src/screens/auth/LoginScreen/LoginScreen';
import { theme } from './src/theme/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <LoginScreen />
      </SafeAreaProvider>
    </ThemeProvider>
  );
}

export default App;

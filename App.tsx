import { ThemeProvider } from '@shopify/restyle';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { Router } from './src/routes/Routes';
import { theme } from './src/theme/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <Router />
      </SafeAreaProvider>
    </ThemeProvider>
  );
}

export default App;

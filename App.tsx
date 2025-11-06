import {ToastProvider} from '@services';
import {ThemeProvider} from '@shopify/restyle';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {Toast} from '@components';

import {Router} from './src/routes/Routes';
import {theme} from './src/theme/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <ToastProvider>
          <Router />
          <Toast />
        </ToastProvider>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}

export default App;

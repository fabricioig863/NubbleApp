import { useTheme } from '@shopify/restyle';

import { Theme } from '../theme/theme';

export function useAppThemeColor() {
  return useTheme<Theme>();
}

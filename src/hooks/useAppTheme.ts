import {useTheme} from '@shopify/restyle';
import {Theme} from '@themes';

export function useAppTheme() {
  return useTheme<Theme>();
}

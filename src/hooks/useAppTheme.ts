import {useTheme} from '@shopify/restyle';
import {Theme} from '../themes/themes';

export function useAppTheme() {
  return useTheme<Theme>();
}

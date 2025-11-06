import {Animated} from 'react-native';

import {useToast, useToastService} from '@services';

import {ToastContent} from './components/ToastContent';
import {useToastAnimation} from './useToastAnimation';

export function Toast() {
  const toast = useToast();
  const {hideToast} = useToastService();

  const {fadeAnim, translateY} = useToastAnimation({toast, hideToast});

  if (!toast) {
    return null;
  }

  const position = toast.postion || 'top';

  return (
    <Animated.View
      style={{
        position: 'absolute',
        alignSelf: 'center',
        opacity: fadeAnim,
        transform: [{translateY}],
        [position]: 100,
      }}>
      <ToastContent toast={toast} />
    </Animated.View>
  );
}

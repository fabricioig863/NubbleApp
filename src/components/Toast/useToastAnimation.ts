import {useCallback, useEffect, useRef} from 'react';
import {Animated} from 'react-native';

import {Toast} from '@services';

const DEFAULT_DURATION = 2000;

interface UseToastAnimationProps {
  toast: Toast | null;
  hideToast: () => void;
}

export function useToastAnimation({toast, hideToast}: UseToastAnimationProps) {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(-40)).current;

  const runEntryAnimation = useCallback(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.spring(translateY, {
        toValue: 0,
        useNativeDriver: true,
        bounciness: 8,
      }),
    ]).start();
  }, [fadeAnim, translateY]);

  const runExitingAnimation = useCallback(
    (callback: Animated.EndCallback) => {
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(translateY, {
          toValue: -40,
          duration: 300,
          useNativeDriver: true,
        }),
      ]).start(callback);
    },
    [fadeAnim, translateY],
  );

  useEffect(() => {
    if (toast) {
      // Reset dos valores de animação para o estado inicial
      fadeAnim.setValue(0);
      translateY.setValue(-40);

      runEntryAnimation();

      setTimeout(() => {
        runExitingAnimation(hideToast);
      }, toast.duration || DEFAULT_DURATION);
    }
  }, [
    hideToast,
    toast,
    runEntryAnimation,
    runExitingAnimation,
    fadeAnim,
    translateY,
  ]);

  return {
    fadeAnim,
    translateY,
  };
}

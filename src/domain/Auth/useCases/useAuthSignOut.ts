import {useMutation} from '@tanstack/react-query';

import {authService} from '../authService';

export function useAuthSignOut() {
  const mutation = useMutation<string, Error, void>({
    mutationFn: () => authService.signOut(),
    retry: false,
  });

  return {
    isLoading: mutation.isPending,
    signOut: () => mutation.mutate(),
  };
}

import {authService} from '@domain';
import {MutationOptions} from '@infra';
import {useMutation} from '@tanstack/react-query';

export function useAuthRequestNewPassword(options?: MutationOptions<string>) {
  const {mutate, isPending} = useMutation<string, Error, string>({
    mutationFn: (email: string) => authService.requestNewPassword(email),
    retry: false,
    onSuccess: (message: string) => {
      if (options?.onSuccess) {
        options.onSuccess(message);
      }
    },
    onError: (error: Error) => {
      if (options?.onError) {
        options.onError(error.message);
      }
    },
  });

  return {
    requestNewPassword: (email: string) => mutate(email),
    isLoading: isPending,
  };
}

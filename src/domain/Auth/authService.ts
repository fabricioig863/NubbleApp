import {api} from '@api';
import {isAxiosError} from 'axios';

import {authAdapter} from './authAdapter';
import {authApi} from './authApi';
import {AuthCredentials, SignUpData} from './authType';

interface ApiErrorResponse {
  message?: string;
  errors?: Array<{message: string}>;
}

async function signIn(
  email: string,
  password: string,
): Promise<AuthCredentials> {
  try {
    const authCredentialsAPI = await authApi.signIn(email, password);
    return authAdapter.toAuthCredentials(authCredentialsAPI);
  } catch (error) {
    throw new Error('email ou senha inválidos');
  }
}

async function signOut(): Promise<string> {
  const message = await authApi.signOut();
  return message;
}

async function signUp(signUpData: SignUpData): Promise<void> {
  await authApi.signUp(signUpData);
}

function updateToken(token: string) {
  api.defaults.headers.common.Authorization = `Bearer ${token}`;
}

function removeToken() {
  api.defaults.headers.common.Authorization = null;
}

async function isUserNameAvailable(username: string): Promise<boolean> {
  const {isAvailable} = await authApi.IsUserNameAvailable({username});
  return isAvailable;
}

async function isEmailAvailable(email: string): Promise<boolean> {
  const {isAvailable} = await authApi.isEmailAvailable({email});
  return isAvailable;
}

async function requestNewPassword(email: string): Promise<string> {
  try {
    const {message} = await authApi.ForgotPassword({email});
    return message;
  } catch (error) {
    throw new Error(mapForgotPasswordError(error));
  }
}

function mapForgotPasswordError(error: unknown): string {
  if (!isAxiosError(error)) {
    return 'Não foi possível enviar o e-mail de recuperação';
  }

  const status = error.response?.status;
  const data = error.response?.data as ApiErrorResponse | undefined;
  const apiMessage =
    data?.message ||
    (Array.isArray(data?.errors) ? data.errors[0]?.message : undefined);

  const statusMessages: Record<number, string> = {
    401: 'E-mail não encontrado',
    404: 'E-mail não encontrado',
    429: 'Muitas tentativas. Aguarde e tente novamente.',
  };

  if (status && statusMessages[status]) {
    return statusMessages[status];
  }

  if (apiMessage === 'User not found') {
    return 'E-mail não encontrado';
  }

  return apiMessage || 'Não foi possível enviar o e-mail de recuperação';
}

async function authenticateByRefreshToken(
  refreshToken: string,
): Promise<AuthCredentials> {
  const acAPI = await authApi.refreshToken(refreshToken);
  return authAdapter.toAuthCredentials(acAPI);
}

export const authService = {
  signIn,
  signOut,
  signUp,
  updateToken,
  removeToken,
  isUserNameAvailable,
  isEmailAvailable,
  requestNewPassword,
  authenticateByRefreshToken,
  isRefreshTokenRequest: authApi.isRefreshTokenRequest,
};

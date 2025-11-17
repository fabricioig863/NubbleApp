import {userAdapter} from '../User/useAdapter';

import {AuthCredentials, AuthCredentialsAPI} from './authType';

function toAuthCredentials(
  authcredentialsAPI: AuthCredentialsAPI,
): AuthCredentials {
  return {
    token: authcredentialsAPI.auth.token,
    tokenExpiresAt: authcredentialsAPI.auth.expires_at,
    refreshToken: authcredentialsAPI.auth.refreshToken,
    user: userAdapter.toUser(authcredentialsAPI.user),
  };
}

export const authAdapter = {
  toAuthCredentials,
};

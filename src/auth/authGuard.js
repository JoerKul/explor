// code from auth0.com/docs/getting-started best practise
// https://github.com/auth0-samples

import { getInstance } from "./authWrapper";

export const authGuard = (to, from, next) => {
  const authService = getInstance();

  const fn = () => {
    if (authService.isAuthenticated) {
      return next();
    }

    authService.loginWithRedirect({ appState: { targetUrl: to.fullPath } });
  };

  if (!authService.loading) {
    return fn();
  }

  authService.$watch("loading", loading => {
    if (loading === false) {
      return fn();
    }
  });
};

import { User, RedirectLoginOptions } from "@auth0/auth0-spa-js";

export interface IState {
  loading: boolean;
  isAuthenticated: boolean;
  error?: any;
  user?: User;
}

export interface IAuth0Config {
  domain: string;
  clientId: string;
  audience: string;
  redirectUri?: string;
}

export interface ICallbackState {
  redirectRoute?: string;
}

export interface ILoginWithRedirect<AppState = ICallbackState> {
  (options?: RedirectLoginOptions<AppState>): Promise<void> | void;
}

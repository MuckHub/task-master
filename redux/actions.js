import { IS_AUTH, SIGN_UP } from './types';

export const isAuthAC = (login) => ({ type: IS_AUTH, payload: { login } });

export const signUp = (login, pass) => ({ type: SIGN_UP, payload: {login, pass} });

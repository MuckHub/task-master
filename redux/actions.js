import { IS_AUTH } from './types';

export const isAuthAC = (login) => ({ type: IS_AUTH, payload: { login } });

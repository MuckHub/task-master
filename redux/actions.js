
import { IS_AUTH, GROUPS_MAIN, SIGN_UP } from './types';

export const isAuthAC = (login) => ({ type: IS_AUTH, payload: { login } });
export const signUp = (login, pass) => ({ type: SIGN_UP, payload: {login, pass} });
export const addGroupsMainAC = (groups) => ({ type: GROUPS_MAIN, payload: { groups } });


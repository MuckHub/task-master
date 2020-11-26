import { IS_AUTH, GROUPS_MAIN } from './types';

export const isAuthAC = (login) => ({ type: IS_AUTH, payload: { login } });

export const addGroupsMainAC = (groups) => ({ type: GROUPS_MAIN, payload: { groups } });

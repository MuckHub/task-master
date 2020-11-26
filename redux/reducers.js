import { IS_AUTH, GROUPS_MAIN } from './types';

export const reducers = (state = { isAuth: null }, action) => {
  switch (action.type) {
    case IS_AUTH:
      console.log('action.payload.login.........', action.payload.login);

      return { ...state, isAuth: action.payload.login };
    
    case GROUPS_MAIN:
      console.log('action.payload', action.payload);
      return { ...state, groups: action.payload.groups };
    

    default:
      return state;
  }
};


import { IS_AUTH, GROUPS_MAIN, SIGN_UP, GET_GROUP_NAME } from './types';


export const reducers = (state = { isAuth: null }, action) => {
  switch (action.type) {
    case IS_AUTH:

      return { ...state, isAuth: action.payload.login };
    
    case GROUPS_MAIN:
      return { ...state, groups: action.payload.groups };
    
    case GET_GROUP_NAME:
      return { ...state, groupName: action.payload.groupName };

    case SIGN_UP:
      return { ...state, isAuth: action.payload.login}

    default:
      return state;
  }
};

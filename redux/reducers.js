
import { IS_AUTH, GROUPS_MAIN, SIGN_UP, ADD_TASKS } from './types';


export const reducers = (state = { isAuth: null }, action) => {
  switch (action.type) {
    case IS_AUTH:
      console.log('action.payload.login.........', action.payload.login);

      return { ...state, isAuth: action.payload.login };
    
    case GROUPS_MAIN:
      console.log('action.payload', action.payload);
      return { ...state, groups: action.payload.groups };
    

    case SIGN_UP:
      return { ...state, isAuth: action.payload.login}

    case ADD_TASKS:
      return {...state, tasks: action.payload.tasks};

    default:
      return state;
  }
};

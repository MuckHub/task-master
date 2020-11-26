import { IS_AUTH } from './types';

export const reducers = (state = { isAuth: null }, action) => {
  switch (action.type) {
    case IS_AUTH:
      console.log(action.payload.login);

      return { ...state, isAuth: action.payload.login };

    default:
      return state;
  }
};

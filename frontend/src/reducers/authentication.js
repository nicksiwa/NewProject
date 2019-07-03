import { LOGIN, LOGOUT } from '../constants/actionTypes';

const initialState = {
  isAuthenticated: false,
  isLoading: false,
  token: '',
  username: '',
  role: '',
}

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN.PENDING:
      return { ...state, isLoading: true };
    case LOGIN.SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        token: `${action.payload.type} ${action.payload.token}`
      };
    case LOGIN.ERROR:
      return { ...state, isLoading: false };
    case LOGOUT.SUCCESS:
      return {
        isAuthenticated: false,
        isLoading: false,
        token: null,
        username: null,
        role: null
      };
    default:
      return state;
  }
}

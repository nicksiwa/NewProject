import { USER } from '../constants/actionTypes';

const initialState = {
  username: '',
  name: '',
  email: '',
  role: '',
}

export const userReducer = (state=initialState, action) => {
  switch (action.type) {
    case USER.GET_INFO_PENDING:
      return state;
    case USER.GET_INFO_SUCCESS:
      return state;
    case USER.GET_INFO_ERROR:
      return state;
    default:
      return state;
  }
}

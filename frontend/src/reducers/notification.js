import { NOTIFICATION } from '../constants/actionTypes';

const initialState = {
  message: null,
  isActive: false
};

export const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case NOTIFICATION.TOKEN_EXPIRED:
      return { isActive: true, message: 'Session has expired' };
    default:
      return state;
  }
}

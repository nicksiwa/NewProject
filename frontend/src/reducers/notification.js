import { NOTIFICATION } from '../constants/actionTypes';

const initialState = {
  message: null,
  isActive: false,
  type: null,
};

export const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case NOTIFICATION.SESSION_EXPIRED:
      return {
        isActive: true,
        message: 'Session has expired',
        type: 'error'
      };
    case NOTIFICATION.INVALID_USER:
      return {
        isActive: true,
        message: 'Invalid username or password',
        type: 'error'
      };
    case NOTIFICATION.CLOSE:
      return initialState;
    default:
      return state;
  }
}

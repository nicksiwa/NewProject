import { NOTIFICATION } from '../constants/actionTypes';

export const notifySessionExpired = () => ({
  type: NOTIFICATION.SESSION_EXPIRED
});

export const closeNotification = () => ({
  type: NOTIFICATION.CLOSE
});

export const invalidUser = () => ({
  type: NOTIFICATION.INVALID_USER
});
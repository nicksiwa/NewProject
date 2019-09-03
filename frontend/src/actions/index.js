import { login, logout, increaseSession, sessionExpired } from './authentication';
import { getUserInfo } from './user';
import { notifySessionExpired, closeNotification } from './notification';

export {
  login,
  logout,
  increaseSession,
  getUserInfo,
  notifySessionExpired,
  sessionExpired,
  closeNotification
};

import { login, logout, increaseSession, sessionExpired } from './authentication';
import { getUserInfo } from './user';
import { notifySessionExpired } from './notification';

export {
  login,
  logout,
  increaseSession,
  getUserInfo,
  notifySessionExpired,
  sessionExpired
};

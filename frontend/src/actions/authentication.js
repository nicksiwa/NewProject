import { push } from 'connected-react-router';
import { LOGIN, LOGOUT, SESSION } from '../constants/actionTypes';
import { loginService } from '../services';
import { notifySessionExpired } from './notification';

const loginPending = () => ({
  type: LOGIN.PENDING
});

const loginSuccess = data => ({
  type: LOGIN.SUCCESS,
  payload: data
});

const loginError = err => ({
  type: LOGIN.ERROR,
  payload: err
});

const logoutSuccess = () => ({
  type: LOGOUT.SUCCESS
});

const increaseSessionAction = token => ({
  type: SESSION.INCREASE_SESSION,
  payload: token
});

const sessionExpiredAction = () => ({
  type: SESSION.SESSION_EXPIRED
});

export const login = data => async dispatch => {
  dispatch(loginPending());
  try {
    const res = await loginService(data);
    dispatch(loginSuccess(res.data));
    dispatch(push('/'));
  } catch (err) {
    dispatch(loginError(err));
    console.log('LOGIN_ACTION_ERROR', err);
  }
}

export const logout = () => dispatch => {
  dispatch(logoutSuccess());
}

export const increaseSession = token => dispatch => {
  dispatch(increaseSessionAction(token));
}

export const sessionExpired = () => dispatch => {
  dispatch(sessionExpiredAction());
  dispatch(notifySessionExpired());
}

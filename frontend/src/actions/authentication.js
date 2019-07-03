import { push } from 'connected-react-router';
import { LOGIN, LOGOUT } from '../constants/actionTypes';
import { loginService } from '../services';

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

export const login = data => dispatch => {
  dispatch(loginPending());
  loginService(data).then(res => {
    dispatch(loginSuccess(res.data));
    dispatch(push('/'));
  }).catch(err => {
    console.log('LOGIN_ACTION_ERROR', err);
    dispatch(loginError(err));
  });
}

export const logout = () => dispatch => {
  dispatch(logoutSuccess());
}

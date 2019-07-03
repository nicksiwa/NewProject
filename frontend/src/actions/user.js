import { USER } from '../constants/actionTypes';
import { getUserInfoService } from '../services';

const getUserInfoPending = () => ({
  type: USER.GET_INFO_PENDING
});

const getUserInfoSuccess = data => ({
  type: USER.GET_INFO_SUCCESS,
  payload: data
});

const getUserInfoError = () => ({
  type: USER.GET_INFO_ERROR
});

export const getUserInfo = () => dispatch => {
  dispatch(getUserInfoPending());
  getUserInfoService().then(res => {
    console.log(res);
    dispatch(getUserInfoSuccess());
  }).catch(err => {
    console.log('GET_USER_INFO_ERROR', err);
    dispatch(getUserInfoError());
  });
};

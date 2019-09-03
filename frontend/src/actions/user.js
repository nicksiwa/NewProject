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

export const getUserInfo = () => async dispatch => {
  try {
    dispatch(getUserInfoPending());
    const data = await getUserInfoService();
    dispatch(getUserInfoSuccess(data));
    console.log(data);
  } catch (err) {
    dispatch(getUserInfoError());
  }
};

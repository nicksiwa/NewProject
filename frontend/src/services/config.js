import axios from 'axios';
import { config } from '../config';
import { store } from '../createStore';
import { sessionExpired } from '../actions';

const service = axios.create({
  baseURL: config.BASE_API_URL
});

const onRequestSuccess = config => {
  const token = store.getState().login.token;
  if (token) {
    config.headers.Authorization = store.getState().login.token;
  }
  return config;
}

const onRequestFail = err => {
  return Promise.reject(err);
}

const onResponseSuccess = res => {
  // store.dispatch(increaseSession(res.config.headers.Authorization));
  return res;
}

const onResponseFail = err => {
  if (err.response.status === 401) {
    store.dispatch(sessionExpired());
  }
  return Promise.reject(err);
}

service.interceptors.request.use(onRequestSuccess, onRequestFail);

service.interceptors.response.use(onResponseSuccess, onResponseFail);

export default service;

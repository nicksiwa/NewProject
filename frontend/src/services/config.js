import axios from 'axios';
import { config } from '../config';
import { store } from '../createStore';

const service = axios.create({
  baseURL: config.BASE_API_URL
});

service.interceptors.response.use(res => {
  return res;
}, err => {
  if (err.response.status === 401) {
    console.log(err);
  }
});

const getToken = () => {
  return store.getState().login.token;
}

service.interceptors.request.use(config => {
  config.headers.Authorization = getToken();
  return config;
});

export default service;

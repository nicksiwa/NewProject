import service from './config';

export const loginService = data => {
  return service.post('auth/signin', data);
}

export const registerService = data => {
  return service.post('auth/signup', data);
}

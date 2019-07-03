import service from './config';

export const getUserInfoService = () => {
  return service.get('test/user');
}

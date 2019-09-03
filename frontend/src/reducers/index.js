import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { connectRouter } from 'connected-react-router';
import { todoReducer } from './todo';
import { loginReducer } from './authentication';
import { notificationReducer } from './notification';

export default (history) => combineReducers({
  router: connectRouter(history),
  todo: todoReducer,
  form: formReducer,
  login: loginReducer,
  notification: notificationReducer
});

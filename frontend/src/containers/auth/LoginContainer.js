import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { reduxForm } from 'redux-form';
import LoginComponent from '../../components/auth/LoginComponent';
import { login, closeNotification } from '../../actions';
import { validate } from '../../components/auth/helper/validation';

const LoginComponentWithReduxForm = reduxForm({
  form: 'login',
  validate,
  enableReinitialize: true,
})(LoginComponent);

const LoginContainer = props => {
  const notification = useSelector(state => state.notification);
  const dispatch = useDispatch();
  const onSubmit = data => dispatch(login(data));
  const onCloseNotification = () => dispatch(closeNotification());

  return (
    <LoginComponentWithReduxForm
      {...props}
      onSubmit={onSubmit}
      notification={notification}
      onCloseNotification={onCloseNotification}
    />
  );
}

export default LoginContainer;

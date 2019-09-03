import React from 'react';
import { useDispatch } from 'react-redux';
import { reduxForm } from 'redux-form';
import LoginComponent from '../../components/auth/LoginComponent';
import { login } from '../../actions';
import { validate } from '../../components/auth/helper/validation';

const LoginComponentWithReduxForm = reduxForm({
  form: 'login',
  validate,
  enableReinitialize: true,
})(LoginComponent);

const LoginContainer = props => {
  const dispatch = useDispatch();
  const onSubmit = data => dispatch(login(data));

  return (
    <LoginComponentWithReduxForm {...props} onSubmit={onSubmit} />
  );
}

export default LoginContainer;

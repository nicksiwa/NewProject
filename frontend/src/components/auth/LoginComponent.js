import React from 'react';
import { Form, Icon, Button, Alert } from 'antd';
import { Field } from 'redux-form';
import { Link } from 'react-router-dom';
import { TextField } from '../shares/forms';
import { ROUTE } from '../../constants/route';

const LoginComponent = props => {
  const {
    handleSubmit,
    notification,
    onCloseNotification
  } = props;

  return (
    <div className="auth-card">
      <p className="auth-title">Login</p>
      {notification.isActive &&
        <Alert
          message={notification.type === 'success' ? "Success" : "Error"}
          description={notification.message}
          type={notification.type}
          afterClose={onCloseNotification}
          showIcon
          closable
        />
      }
      <Form onSubmit={handleSubmit}>
        <Form.Item>
          <Field
            name="username"
            type="text"
            placeholder="Username"
            component={TextField}
            size="large"
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
          />
        </Form.Item>
        <Form.Item>
          <Field
            name="password"
            type="password"
            placeholder="Password"
            component={TextField}
            size="large"
            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
          />
        </Form.Item>
        <Form.Item>
          <Button block type="primary" size="large" htmlType="submit">
            Log in
          </Button>
        </Form.Item>
        <Form.Item className="form-item --fluid">
          Or <Link to={ROUTE.REGISTER} type="link" className="form-link">Register now</Link>
        </Form.Item>
      </Form>
    </div>
  );
}

export default LoginComponent;

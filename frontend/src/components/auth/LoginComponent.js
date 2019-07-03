import React from 'react';
import { Form, Icon, Button } from 'antd';
import { Field } from 'redux-form';
import { TextField } from '../shares/forms'

const LoginComponent = props => {
  const { handleSubmit } = props;

  return (
    <div className="auth-card">
      <p className="auth-title">Login</p>
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
          Or <Button type="link" className="form-link">Register now</Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default LoginComponent;

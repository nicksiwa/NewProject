import React from 'react';
import { Form, Icon, Input, Button } from 'antd';

const LoginComponent = () => {
  return (
    <Form>
      <Form.Item>
        <Input
          size="large"
          prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
          placeholder="Username"
        />
      </Form.Item>
      <Form.Item>
        <Input
          size="large"
          prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Button block type="primary" size="large">
          Log in
        </Button>
      </Form.Item>
      <Form.Item className="form-item --fluid">
        Or <a>Register now</a>
      </Form.Item>
    </Form>
  );
}

export default LoginComponent;

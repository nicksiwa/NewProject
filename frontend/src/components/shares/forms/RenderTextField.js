import React from 'react';
import { Input, Form } from 'antd';

export const RenderTextField = props => {
  const {
    placeholder,
    meta: { error, touched }
  } = props;
  return (
    <Form.Item
      validateStatus={touched && error ? 'error' : ''}
      help={touched && error}
    >
      <Input {...props.input} placeholder={placeholder} />
    </Form.Item>
  );
}

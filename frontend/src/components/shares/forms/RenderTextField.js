import React from 'react';
import { Input, Form } from 'antd';

export const RenderTextField = props => {
  const {
    placeholder,
    size,
    prefix,
    type,
    meta: { error, touched }
  } = props;
  return (
    <Form.Item
      validateStatus={touched && error ? 'error' : ''}
      help={touched && error}
    >
      <Input
        {...props.input}
        placeholder={placeholder}
        size={size}
        prefix={prefix}
        type={type}
      />
    </Form.Item>
  );
}

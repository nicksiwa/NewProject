import React from 'react';
import { Field } from 'redux-form';
import { Form, Button } from 'antd';
import { TextField } from '../../components/shares/forms';

export const FormComponent = props => {
  const { handleSubmit } = props;
  return (
    <Form layout="inline" onSubmit={handleSubmit}>
      <Form.Item>
        <Field name="title" type="text" component={TextField} placeholder="Title" />
      </Form.Item>
      <Form.Item>
        <Field name="content" type="text" component={TextField} placeholder="Content" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">Create Todo</Button>
      </Form.Item>
    </Form>
  );
}

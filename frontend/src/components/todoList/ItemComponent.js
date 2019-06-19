import React from 'react';
import { List, Button } from 'antd';

export const ItemComponent = props => {
  const { item } = props;
  return (
    <List.Item actions={[<Button type="danger">Delete</Button>]}>
      <List.Item.Meta
        title={item.title}
        description={item.content}
      />
    </List.Item>
  );
}

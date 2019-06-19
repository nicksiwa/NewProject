import React from 'react';
import { List, Button } from 'antd';

export const ItemComponent = props => {
  const { item, onDelete } = props;
  return (
    <List.Item actions={[<Button type="danger" onClick={() => onDelete(item.id)}>Delete</Button>]}>
      <List.Item.Meta
        title={item.title}
        description={item.content}
      />
    </List.Item>
  );
}

import React from 'react';
import { List } from 'antd';
import { ItemComponent } from './ItemComponent';

export const ListComponent = props => {
  const { todo } = props;
  return (
    <List
      dataSource={todo}
      renderItem={item => (
        <ItemComponent item={item} />
      )}
    />
  );
}
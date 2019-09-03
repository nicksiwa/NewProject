import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Modal } from 'antd';

const NotificationModal = () => {
  const { isActive, message } = useSelector(state => state.notification);

  return (
    <Modal visible={isActive}>
      <p>{message}</p>
    </Modal>
  );
}

export default NotificationModal;

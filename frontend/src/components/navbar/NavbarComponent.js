import React from 'react';
import { Menu, Icon } from 'antd';

const NavbarComponent = props => {
  const { handleLogout } = props;

  return (
    <Menu theme="dark" mode="horizontal" className="navbar">
      <Menu.Item onClick={handleLogout} className="--right">
        <Icon type="logout" />
        Logout
      </Menu.Item>
    </Menu>
  );
}

export default NavbarComponent;

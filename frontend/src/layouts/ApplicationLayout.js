import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Layout } from 'antd';
import { getUserInfo, logout } from '../actions';
import Navbar from '../components/navbar/NavbarComponent';
// import NotificationModal from '../components/shares/NotificationModal';

const ApplicationLayout = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  const handleLogout = () => dispatch(logout());
  const { Header, Content } = Layout;

  useEffect(() => {
    dispatch(getUserInfo());
  });

  return (
    <Layout>
      <Header>
        <Navbar handleLogout={handleLogout} />
      </Header>
      <Content>
        ApplicationLayout
        {user}
      </Content>
      {/* <NotificationModal /> */}
    </Layout>
  );
}

export default ApplicationLayout;

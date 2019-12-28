import React from 'react';
import { Layout, Menu } from 'antd';
import { useHistory } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import '../styles/layout.less';

function goTo(e, history) {
  history.push(`/${e.key}`);
}

export default (WrappedComponent, option) => {
  const defaultOption = {
    hasFooter: true,
  };
  const { hasFooter } = Object.assign(defaultOption, option);
  const { Header, Footer, Content } = Layout;
  return () => {
    const history = useHistory();
    return (
      <>
        <Layout className="layout-wrapper">
          <Header className="layout-header">
            <Menu
              theme="dark"
              mode="horizontal"
              onClick={e => goTo(e, history)}
            >
              <Menu.Item key="home">
                <img src={logo} className="logo" width={60} alt="logo" />
              </Menu.Item>
              <Menu.Item key="about">About</Menu.Item>
            </Menu>
          </Header>
          <Content
            className={
              hasFooter
                ? 'layout-content-with-footer'
                : 'layout-content-without-footer'
            }
          >
            <WrappedComponent />
          </Content>
          {hasFooter ? (
            <Footer className="layout-footer">&copy; Huauauaa.com</Footer>
          ) : null}
        </Layout>
      </>
    );
  };
};

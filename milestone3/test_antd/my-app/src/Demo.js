import React, {useState} from 'react';
import './index.css';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme, Slider, Row, Col, Divider } from 'antd';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import styled from 'styled-components';

import Page1 from './pages/page1';
import HomePage from './pages/homepage';

import PaintMushroom from './paintMushroom/paintMushroom';
import { SketchPicker } from 'react-color';

const { Header, Content, Sider } = Layout;

const items1 = ['1', '2', '3'].map((key) => ({
  key,
  label: <Link to={`/page${key}`}>nav {key}</Link>,
}));


const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
  const key = String(index + 1);
  return {
    key: `sub${key}`,
    icon: React.createElement(icon),
    label: `subnav ${key}`,
    children: new Array(4).fill(null).map((_, j) => {
      const subKey = index * 4 + j + 1;
      return {
        key: subKey,
        label: <Link to={`/subpage${subKey}`}>option{subKey}</Link>,
      };
    }),
  };
});

const CustomDivider = styled(Divider)`
  color: #1890ff;
  font-size: 24px;
  margin: 20px 0;
`;

const CustomSlider = styled(Slider)`
  width: 80%;
  margin: 20px;
`;

const App = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const [color, setColor] = useState('#FF6347');
  const [size, setSize] = useState(200);

  return (
    <Router>
      <Layout>
        <Header
          style={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <div className="demo-logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            items={items1}
            style={{
              flex: 1,
              minWidth: 0,
            }}
          />
        </Header>
        <Layout>
          <Sider
            width={200}
            style={{
              background: colorBgContainer,
            }}
          >
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{
                height: '100%',
                borderRight: 0,
              }}
              items={items2}
            />
          </Sider>
          <Layout
            style={{
              padding: '0 24px 24px',
            }}
          >
            <Breadcrumb
              style={{
                margin: '16px 0',
              }}
            >
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Content
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
                background: colorBgContainer,
                borderRadius: borderRadiusLG,
              }}
            >
              <Routes>
                <Route exact path="/" element={<HomePage />} />
                <Route path="/subpage1" element={<Page1 />} />
              </Routes>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </Router>
  );
};

export default App;

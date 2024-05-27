import React from 'react';
import './index.css';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme, Slider, Row, Col, Divider } from 'antd';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import Cloud from './visualize/cloud';
import Pie from './pages/pie';
import Stack from './pages/stack';
import HomePage from './pages/homepage';


const { Header, Content, Sider } = Layout;



//const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
  const items2 = [NotificationOutlined].map((icon, index) => {
    const key = String(index + 1);
    return {
      key: `sub${key}`,
      icon: React.createElement(icon),
      label: `Navigation`,
      children: new Array(4).fill(null).map((_, j) => {
        const subKey = index * 4 + j + 1;
        let label;
        let linkName;
        switch (subKey) {
          case 1:
            label = "HomePage";
            linkName = "";
            break;
          case 2:
            label = "Stack Chart";
            linkName = "stack-chart";
            break;
          case 3:
            label = "Pie Chart";
            linkName = "pie-chart";
            break;
          case 4:
            label = "Cloud Chart";
            linkName = "cloud-chart";
            break;
          default:
            label = `Option ${subKey}`;
            linkName = `option${subKey}`;
        }
        return {
          key: subKey,
          label: <Link to={`/${linkName}`}>{label}</Link>, // Use label instead of option{subKey}
        };
      }),
    };
  });

const App = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();


  return (
    <Router>
      <Layout>
        
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
                <Route path="/stack-chart" element={<Stack />} />
                <Route path="/pie-chart" element={<Pie />} />
                <Route path="/cloud-chart" element={<Cloud />} />
              </Routes>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </Router>
  );
};

export default App;

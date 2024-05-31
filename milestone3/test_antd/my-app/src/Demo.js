import React from 'react';
import './index.css';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme, Slider, Row, Col, Divider } from 'antd';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import Table_ from './visualize/table';
import Detail from './visualize/detail'
import Cloud from './visualize/cloud';
import Pie from './pages/pie';
import Stack from './pages/stack';
import HomePage from './pages/homepage';

import Breadcrumbs from './breadcrumb';


const { Header, Content, Sider } = Layout;



//const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
  const items2 = [NotificationOutlined].map((icon, index) => {
    const key = String(index + 1);
    return {
      key: `sub${key}`,
      icon: React.createElement(icon),
      label: `Navigation`,
      children: new Array(5).fill(null).map((_, j) => {
        const subKey = index * 5 + j + 1;
        let label;
        let linkName;
        switch (subKey) {
          case 1:
            label = "Overview";
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
          case 5:
            label = "Details";
            linkName = "detail";
            break;
        {/* 
          case 6:
            label = "HomePage";
            linkName = "homepage";
            break;
        */}
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

            <Breadcrumbs />
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
                <Route exact path="/" element={<Table_ />} />
                <Route path="/stack-chart" element={<Stack />} />
                <Route path="/pie-chart" element={<Pie />} />
                <Route path="/cloud-chart" element={<Cloud />} />
                <Route path="/detail" element={<Detail />} />
                <Route path="/homepage" element={<HomePage />} />
              </Routes>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </Router>
  );
};

export default App;

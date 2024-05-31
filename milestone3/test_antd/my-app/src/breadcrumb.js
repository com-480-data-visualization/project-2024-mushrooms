// Breadcrumbs.js
import React from 'react';
import { Breadcrumb } from 'antd';
import { useLocation, Link } from 'react-router-dom';

const Breadcrumbs = () => {
  const location = useLocation();
  const pathSnippets = location.pathname.split('/').filter(i => i);

  const breadcrumbNameMap = {
    '/project-2024-mushrooms': 'Project 2024 Mushrooms',
    '/project-2024-mushrooms/stack-chart': 'Stack Chart',
    '/project-2024-mushrooms/pie-chart': 'Pie Chart',
    '/project-2024-mushrooms/cloud-chart': 'Cloud Chart',
    '/project-2024-mushrooms/detail': 'Detail',
    '/project-2024-mushrooms/overview': 'Overview',
  };

  const breadcrumbItems = [
    <Breadcrumb.Item key="home">
      <Link to="/">Home</Link>
    </Breadcrumb.Item>,
    ...pathSnippets.map((_, index) => {
      const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
      return (
        <Breadcrumb.Item key={url}>
          <Link to={url}>{breadcrumbNameMap[url] || url}</Link>
        </Breadcrumb.Item>
      );
    }),
  ];

  return (
    <Breadcrumb style={{ margin: '16px 0' }}>
      {breadcrumbItems}
    </Breadcrumb>
  );
};

export default Breadcrumbs;

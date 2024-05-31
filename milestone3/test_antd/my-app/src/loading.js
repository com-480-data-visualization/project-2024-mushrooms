// Loading.js
import React from 'react';
import { Spin } from 'antd';
import './Loading.css'; // 用于自定义样式

const Loading = () => (
  <div className="loading-container">
    <Spin size="large" />
  </div>
);

export default Loading;

import React, {useState} from 'react';
import { Slider, Row, Col, Divider } from 'antd';

import styled from 'styled-components';

import PaintMushroom from '../paintMushroom/PaintMushroom';
import { SketchPicker } from 'react-color';

const CustomDivider = styled(Divider)`
  color: #1890ff;
  font-size: 24px;
  margin: 20px 0;
`;

const CustomSlider = styled(Slider)`
  width: 80%;
  margin: 20px;
`;


const HomePage = () => {
  const [color, setColor] = useState('#FF6347');
  const [size, setSize] = useState(200);

  return (
  <div>
    <div>
      <h1>Home Page</h1>
    </div>
    <div style={{ padding: 20 }}>

      <CustomDivider>Mushroom Visualization</CustomDivider>
      <Row>
        <Col span={12}>
          <SketchPicker
            color={color}
            onChangeComplete={(newColor) => setColor(newColor.hex)}
          />
        </Col>
        <Col span={12}>
          <CustomSlider
            min={50}
            max={400}
            onChange={(value) => setSize(value)}
            value={size}
          />
        </Col>
      </Row>
      <Divider />
      <PaintMushroom color={color} size={size} />
    </div>
  </div>
  );
};

export default HomePage;



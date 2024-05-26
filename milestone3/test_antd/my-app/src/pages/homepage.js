import React from 'react';

const HomePage = () => (
  <div>
    <div>
      <h1>Home Page</h1>
    </div>
    <div style={{ padding: 20 }}>
      <CustomDivider>蘑菇可视化</CustomDivider>
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

export default HomePage;



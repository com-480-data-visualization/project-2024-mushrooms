import { Radar } from '@ant-design/plots';
import React from 'react';

const DemoRadar = ({ mushroom }) => {
  // Parse the attributes as arrays
  const capDiameter = JSON.parse(mushroom["cap-diameter"] || '[]');
  const stemHeight = JSON.parse(mushroom["stem-height"] || '[]');
  const stemWidth = JSON.parse(mushroom["stem-width"] || '[]');

  // Ensure they are arrays and contain numbers
  if (!Array.isArray(capDiameter) || !Array.isArray(stemHeight) || !Array.isArray(stemWidth)) {
    return <div>Error: Mushroom data format is incorrect.</div>;
  }

  const processedData = [
    { item: 'Cap Diameter', type: 'min', score: parseFloat(capDiameter[0]) },
    { item: 'Cap Diameter', type: 'max', score: parseFloat(capDiameter[1]) },
    { item: 'Stem Height', type: 'min', score: parseFloat(stemHeight[0]) },
    { item: 'Stem Height', type: 'max', score: parseFloat(stemHeight[1]) },
    { item: 'Stem Width', type: 'min', score: parseFloat(stemWidth[0]) },
    { item: 'Stem Width', type: 'max', score: parseFloat(stemWidth[1]) }
  ];

  const maxValues = {
    "Cap Diameter": Math.max(...capDiameter.map(parseFloat)),
    "Stem Height": Math.max(...stemHeight.map(parseFloat)),
    "Stem Width": Math.max(...stemWidth.map(parseFloat)),
  };

  const config = {
    data: processedData,
    xField: 'item',
    yField: 'score',
    colorField: 'type',
    shapeField: 'smooth',
    area: {
      style: {
        fillOpacity: 0.5,
      },
    },
    scale: {
      CapDiameter: { min: 0, max: maxValues["Cap Diameter"] },
      StemHeight: { min: 0, max: maxValues["Stem Height"] },
      StemWidth: { min: 0, max: maxValues["Stem Width"] },
    },
    axis: { x: { grid: true }, y: { zIndex: 1, title: false } },
    style: {
      lineWidth: 2,
    },
  };

  return <Radar {...config} />;
};

export default DemoRadar;

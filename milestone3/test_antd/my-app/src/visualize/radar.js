import { Radar } from '@ant-design/plots';
import React from 'react';

const DemoRadar = ({ mushroom }) => {
  const processedData = [
    { item: 'Cap Diameter', type: 'a', score: parseFloat(mushroom["cap-diameter"][0]) },
    { item: 'Cap Diameter', type: 'b', score: parseFloat(mushroom["cap-diameter"][1]) },
    { item: 'Stem Height', type: 'a', score: parseFloat(mushroom["stem-height"][0]) },
    { item: 'Stem Height', type: 'b', score: parseFloat(mushroom["stem-height"][1]) },
    { item: 'Stem Width', type: 'a', score: parseFloat(mushroom["stem-width"][0]) },
    { item: 'Stem Width', type: 'b', score: parseFloat(mushroom["stem-width"][1]) }
  ];

  const maxValues = {
    "Cap Diameter": Math.max(...mushroom["cap-diameter"].map(parseFloat)),
    "Stem Height": Math.max(...mushroom["stem-height"].map(parseFloat)),
    "Stem Width": Math.max(...mushroom["stem-width"].map(parseFloat)),
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

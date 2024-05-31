import { Radar } from '@ant-design/plots';
import React, { useState, useEffect } from 'react';
import mushroomsData from './processed_mushroom_data.json';

const DemoRadar = () => {
  const [data, setData] = useState([]);
  const [selectedMushroom, setSelectedMushroom] = useState(mushroomsData[0].name);

  useEffect(() => {
    const selectedData = mushroomsData.find(mushroom => mushroom.name === selectedMushroom);
    const processedData = [
      { item: 'Cap Diameter', type: 'a', score: parseFloat(selectedData["cap-diameter"][0]) },
      { item: 'Cap Diameter', type: 'b', score: parseFloat(selectedData["cap-diameter"][1]) },
      { item: 'Stem Height', type: 'a', score: parseFloat(selectedData["stem-height"][0]) },
      { item: 'Stem Height', type: 'b', score: parseFloat(selectedData["stem-height"][1]) },
      { item: 'Stem Width', type: 'a', score: parseFloat(selectedData["stem-width"][0]) },
      { item: 'Stem Width', type: 'b', score: parseFloat(selectedData["stem-width"][1]) }
    ];
    setData(processedData);
  }, [selectedMushroom]);

  // Determine maximum values for dynamic scaling
  const maxValues = {
    "Cap Diameter": Math.max(...mushroomsData.flatMap(m => [parseFloat(m["cap-diameter"][0]), parseFloat(m["cap-diameter"][1])])),
    "Stem Height": Math.max(...mushroomsData.flatMap(m => [parseFloat(m["stem-height"][0]), parseFloat(m["stem-height"][1])])),
    "Stem Width": Math.max(...mushroomsData.flatMap(m => [parseFloat(m["stem-width"][0]), parseFloat(m["stem-width"][1])])),
  };

  const config = {
    data,
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

  return (
    <div>
      <div>
        <label>Select Mushroom: </label>
        <select value={selectedMushroom} onChange={e => setSelectedMushroom(e.target.value)}>
          {mushroomsData.map(mushroom => (
            <option key={mushroom.name} value={mushroom.name}>{mushroom.name}</option>
          ))}
        </select>
      </div>
      <Radar {...config} />
    </div>
  );
};

export default DemoRadar;

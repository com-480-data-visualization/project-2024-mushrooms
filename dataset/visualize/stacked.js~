import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Area } from '@ant-design/plots';
import { Select } from 'antd';
import axios from 'axios';

const { Option } = Select;

const Stacked = () => {
  const [data, setData] = useState([]);
  const [groupedData, setGroupedData] = useState([]);
  const [features, setFeatures] = useState([]);
  const [xField, setXField] = useState('');
  const [colorField, setColorField] = useState('');

  useEffect(() => {
    // Fetch data from your JSON file
    axios.get('./dataset/mushroom_transformed_final.json')
      .then(response => {
        const fetchedData = response.data;
        console.log('Fetched data:', fetchedData);
        setData(fetchedData);
        // Extract feature names from the first entry
        const featureNames = Object.keys(fetchedData[0]).filter(key => key !== 'count');

        console.log('Feature names:', featureNames);

        setFeatures(featureNames);
        setXField(featureNames[0]);
        setColorField(featureNames[1]);
      })
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  useEffect(() => {
    if (xField && colorField) {
      const grouped = data.reduce((acc, item) => {
        const key = `${item[xField]}-${item[colorField]}`;
        if (!acc[key]) {
          acc[key] = { [xField]: item[xField], [colorField]: item[colorField], count: 0 };
        }
        acc[key].count += item.count;
        
        return acc;
      }, {});
    
            // Get all unique values for xField and colorField
    const xValues = [...new Set(data.map(item => item[xField]))];
    const colorValues = [...new Set(data.map(item => item[colorField]))];

          // Generate all possible combinations of xField and colorField
    const allCombinations = [];
    xValues.forEach(xVal => {
      colorValues.forEach(colorVal => {
        const key = `${xVal}-${colorVal}`;
        if (grouped[key]) {
          allCombinations.push(grouped[key]);
        } else {
          allCombinations.push({ [xField]: xVal, [colorField]: colorVal, count: 0 });
        }
      });
    });

    const orderedGroupedData = allCombinations.map(item => ({
        [xField]: item[xField],
        [colorField]: item[colorField],
        count: item.count,
      }));

      console.log('Grouped data:', orderedGroupedData);
      setGroupedData(orderedGroupedData);
    }
  }, [xField, colorField, data]);

  const config = {
    data: groupedData,
    xField,
    yField: 'count',
    colorField,
    normalize: true,
    stack: true,
    tooltip: { channel: 'y0', valueFormatter: '.0%' },
    connectNulls: {
      connect: true,
      connectFill: 'grey',
      connectFillOpacity: 0.15,
    },
  };

  return (
    <div>
      <div style={{ marginBottom: 16 }}>
        <Select
          style={{ width: 200, marginRight: 16 }}
          placeholder="Select X Field"
          value={xField}
          onChange={setXField}
        >
          {features.map(feature => (
            <Option key={feature} value={feature}>
              {feature}
            </Option>
          ))}
        </Select>
        <Select
          style={{ width: 200 }}
          placeholder="Select Color Field"
          value={colorField}
          onChange={setColorField}
        >
          {features.map(feature => (
            <Option key={feature} value={feature}>
              {feature}
            </Option>
          ))}
        </Select>
      </div>
      <Area {...config} />
    </div>
  );
};

export default Stacked;

import { WordCloud } from '@ant-design/plots';
import React from 'react';
import mushroomData from './primary_data.json'; // Import mushroom data from JSON file

// Function to generate a random number between min and max
const getRandomNumber = (min, max) => {
  return Math.random() * (max - min) + min;
};

// Process the mushroom data to create WordCloud data entries
const processData = (data) => {
  return data.map((mushroom) => ({
    value: getRandomNumber(10, 15), // Generate a random value between 10 and 15
    text: mushroom.name, // Use the name of the mushroom as the text
    name: mushroom.name // Use the name of the mushroom as the name
  }));
};

const DemoWordCloud = () => {
  const config = {
    data: processData(mushroomData), // Process the mushroom data
    layout: { spiral: 'rectangular' },
    colorField: 'text', // Use the 'text' field for coloring
  };
  return <WordCloud {...config} />;
};

export default DemoWordCloud;

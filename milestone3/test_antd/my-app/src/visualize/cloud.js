/*
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
*/
import { WordCloud } from '@ant-design/plots';
import React from 'react';
import mushroomData from './primary_data.json'; // Import mushroom data from JSON file

// Function to generate a random number between min and max
const getRandomNumber = (min, max) => {
  return Math.random() * (max - min) + min;
};

// Function to shuffle an array
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

// Process the mushroom data to create WordCloud data entries
const processData = (data, sampleSize) => {
  const shuffledData = shuffleArray(data);
  const sampledData = shuffledData.slice(0, sampleSize);
  return sampledData.map((mushroom) => ({
    value: getRandomNumber(10, 15), // Generate a random value between 10 and 15
    text: mushroom.name, // Use the name of the mushroom as the text
    name: mushroom.name // Use the name of the mushroom as the name
  }));
};

const DemoWordCloud = () => {
  const config = {
    data: processData(mushroomData, 150), // Process and sample the mushroom data
    layout: { spiral: 'rectangular' },
    colorField: 'text', // Use the 'text' field for coloring
  };
  return <WordCloud {...config} />;
};

export default DemoWordCloud;

import React, { useState } from 'react';
import Stacked from '../visualize/stacked';

const Stack = () => {
  const [firstSelectValue, setFirstSelectValue] = useState('');
  const [secondSelectValue, setSecondSelectValue] = useState('');

  const handleFirstSelectChange = (event) => {
    setFirstSelectValue(event.target.value);
  };

  const handleSecondSelectChange = (event) => {
    setSecondSelectValue(event.target.value);
  };

  const handleSubmit = () => {
    // This is where you can pass the selected values to another function
    anotherFunction(firstSelectValue, secondSelectValue);
  };

  const anotherFunction = (firstValue, secondValue) => {
    console.log(`First Select: ${firstValue}`);
    console.log(`Second Select: ${secondValue}`);
    // Do something with the values

    
    
  };

  return (
    <div style={{ padding: '20px', backgroundColor: '#f0f2f5', borderRadius: '8px' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '20px', color: '#3f51b5' }}>Exploring the Stack Chart</h1>
      <div style={{ fontSize: '16px', lineHeight: '1.6', color: '#595959', marginBottom: '20px' }}>
        Welcome to the stack chart visualization. Here, we invite you to embark on a journey through the intricate relationships between different features of our data set. 
        Imagine uncovering hidden patterns and gaining new insights as you select two features to explore. Each combination you choose will reveal a unique story, highlighting the dynamic interplay between the elements of our data. 
        Take a moment to select your desired features and dive into the fascinating world of data visualization.
      </div>
      <Stacked />
    </div>
  );
};

export default Stack;
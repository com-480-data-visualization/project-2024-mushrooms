import React, { useState } from 'react';
import Piechart from '../visualize/piechart';

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
      <h1 style={{ textAlign: 'center', marginBottom: '20px', color: '#3f51b5' }}>Discovering the Pie Chart</h1>
      <div style={{ fontSize: '16px', lineHeight: '1.6', color: '#595959', marginBottom: '20px' }}>
        Welcome to the pie chart visualization. Here, you can explore the intricate balance and proportional relationships within our data set. 
        Each segment of the pie represents a different parameter, telling its own story in the context of the whole. By selecting a parameter, you will uncover its relative significance and contribution to the larger picture. 
        Take a moment to choose your parameter and delve into the colorful narrative of our data.
      </div>
      <Piechart />
    </div>
  );
};

export default Stack;
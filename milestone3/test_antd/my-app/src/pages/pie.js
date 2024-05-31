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
    <div>
      <h1>Pie Chart</h1>
      
      <div>
        This pie chart illustrates the proportional relationships between various parameters. Please select the parameter you desire:
      </div>
      <Piechart />
    </div>
  );
};

export default Stack;
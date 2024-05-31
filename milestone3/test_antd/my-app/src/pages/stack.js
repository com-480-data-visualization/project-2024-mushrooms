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
    <div>
      <h1>Placeholder for the title.</h1>
      <div>
        Placeholder for the text.
      </div>
      <Stacked />
      <div>
        Placeholder for the text.
      </div>
    </div>
  );
};

export default Stack;
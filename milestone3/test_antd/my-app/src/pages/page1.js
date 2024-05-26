import React, { useState } from 'react';
import Stacked from '../visualize/stacked';

const Page1 = () => {
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
        <select value={firstSelectValue} onChange={handleFirstSelectChange}>
          <option value="" disabled>Select an option</option>
          <option value="option1-1">Option 1-1</option>
          <option value="option1-2">Option 1-2</option>
          <option value="option1-3">Option 1-3</option>
        </select>
      </div>
      <div>
        <select value={secondSelectValue} onChange={handleSecondSelectChange}>
          <option value="" disabled>Select an option</option>
          <option value="option2-1">Option 2-1</option>
          <option value="option2-2">Option 2-2</option>
          <option value="option2-3">Option 2-3</option>
        </select>
      </div>
      <button onClick={handleSubmit}>Submit</button>
      <Stacked />
    </div>
  );
};

export default Page1;
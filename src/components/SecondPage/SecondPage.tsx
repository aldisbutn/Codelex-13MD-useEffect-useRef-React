import React, { useEffect, useState } from 'react';

export const SecondPage = () => {
  const [formInputValue, setFormInputValue] = useState('');
  const [buttonCount, setButtonCount] = useState(0);
  const [formInputValueTwo, setFormInputValueTwo] = useState('');
  const [buttonCountTwo, setButtonCountTwo] = useState(0);
  const [fontSizeCount, setFontSizeCount] = useState(1.17);

  // Log when something in the page re-renders
  useEffect(() => {
    console.log('Render');
  }, [buttonCount, formInputValue, formInputValueTwo, buttonCountTwo, fontSizeCount]);

  // Log when the page first renders and set the count to 100
  useEffect(() => {
    console.log('first render');
    setButtonCountTwo(100);
  }, []);

  // When button is pressed set count and log that the count is changing
  const addCountAndConsoleLog = () => {
    setButtonCount(buttonCount + 1);
    console.log('changing count');
  };

  // Set input value and log that the input is changing
  const changeTextAndConsoleLog = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newInputValue = e.target.value;
    setFormInputValue(newInputValue);
    console.log('input change');
  };

  // When button is pressed set count and increase the font size
  const addCountAndIncreaseSize = () => {
    setButtonCountTwo(buttonCountTwo + 1);
    setFontSizeCount(fontSizeCount + 0.1);
    console.log('changing count');
  };

  // Get the input value from the second form and change the page title to it
  const changeTextAndChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newInputValue = e.target.value;
    setFormInputValueTwo(newInputValue);
    document.title = newInputValue;
  };

  return (
    <>
      <button onClick={addCountAndConsoleLog} className='button'>
        +
      </button>
      <h3>Count: {buttonCount}</h3>
      <form>
        <input
          type='text'
          placeholder='Janis Dusmigs'
          value={formInputValue}
          onChange={(e) => changeTextAndConsoleLog(e)}
          className='input'
        />
      </form>
      <h3>{formInputValue}</h3>

      <button onClick={addCountAndIncreaseSize} className='button'>
        +
      </button>
      <h3
        style={{
          fontSize: `${fontSizeCount}rem`,
        }}
      >
        Count: {buttonCountTwo}
      </h3>
      <form>
        <input
          type='text'
          placeholder='Janis Dusmigs'
          value={formInputValueTwo}
          onChange={(e) => changeTextAndChangeTitle(e)}
          className='input'
        />
      </form>
    </>
  );
};

import React, { useEffect, useState } from 'react';

export const SecondPage = () => {
  const [formInputValue, setFormInputValue] = useState('');
  const [buttonCount, setButtonCount] = useState(0);
  const [formInputValueTwo, setFormInputValueTwo] = useState('');
  const [buttonCountTwo, setButtonCountTwo] = useState(0);
  const [fontSizeCount, setFontSizeCount] = useState(1.17);

  useEffect(() => {
    console.log('Render');
  }, [buttonCount, formInputValue, formInputValueTwo, buttonCountTwo]);

  useEffect(() => {
    console.log('first render');
    setButtonCountTwo(100);
  }, []);

  const addCountAndConsoleLog = () => {
    setButtonCount(buttonCount + 1);
    console.log('changing count');
  };

  const changeTextAndConsoleLog = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newInputValue = event.target.value;
    setFormInputValue(newInputValue);
    console.log('input change');
  };

  const addCountAndIncreaseSize = () => {
    setButtonCountTwo(buttonCountTwo + 1);
    setFontSizeCount(fontSizeCount + 0.1);
    console.log('changing count');
  };

  const changeTextAndChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newInputValue = event.target.value;
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
          fontSize: `${fontSizeCount}rem`, // Use backticks for template literals
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

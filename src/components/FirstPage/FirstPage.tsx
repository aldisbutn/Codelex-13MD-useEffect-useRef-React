import React, { useEffect, useState, useRef } from 'react';
import Style from './FirstPage.module.css';

export const FirstPage = () => {
  const [formInputDisplay, setFormInputDisplay] = useState('');
  const [formInputValue, setFormInputValue] = useState('');
  const [disabledButton, setDisabledButton] = useState(true);
  const [buttonCount, setButtonCount] = useState(0);
  const [coloredSquares, setColoredSquares] = useState<{ color: string; id: number }[]>([]);
  const [colorValue, setColorValue] = useState('red');

  const inputRef = useRef<HTMLInputElement>(null);
  const disabledButtonRef = useRef<HTMLButtonElement>(null);

  const setDisabledToFalse = () => setDisabledButton(false);

  // On the first render focus on the input and disable the button for 5 seconds
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
    setInterval(setDisabledToFalse, 5000);
  }, []);

  // Get the input from the form and set form display
  const showFormInput = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormInputDisplay(formInputValue);
    setFormInputValue('');
  };

  // Add a colored square to the array
  const addColoredSquare = () => {
    if (colorValue) {
      const newSquare = {
        color: colorValue,
        id: coloredSquares.length,
      };
      setColoredSquares((prevSquares) => [...prevSquares, newSquare]);
    }
  };

  return (
    <>
      <form>
        <input type='text' placeholder='Write something...' ref={inputRef} className='input' />
      </form>

      <div className={Style.formWrapper}>
        <form onSubmit={(e) => showFormInput(e)}>
          <input
            type='text'
            placeholder='Write something...'
            value={formInputValue}
            onChange={(e) => setFormInputValue(e.target.value)}
            className='input'
          />
          <button className='button'>Submit</button>
        </form>
        <h3>{formInputDisplay}</h3>
      </div>

      <button disabled={disabledButton} ref={disabledButtonRef} className='button'>
        Disabled
      </button>

      <button onClick={() => setButtonCount(buttonCount + 1)} className='button'>
        Count: {buttonCount}
      </button>
      <div className='squareCountX2'>
        <h3>{buttonCount * 2}</h3>
      </div>

      <div>
        <button onClick={() => addColoredSquare()} className='button'>
          +
        </button>
        <select name='colors' onChange={(e) => setColorValue(e.target.value)} value={colorValue} className='select'>
          <option value='red'>Red</option>
          <option value='green'>Green</option>
          <option value='blue'>Blue</option>
          <option value='black'>Black</option>
        </select>
      </div>
      <div className={Style.coloredSquares}>
        {coloredSquares.map((square) => (
          <div
            key={square.id}
            style={{
              width: '50px',
              height: '50px',
              backgroundColor: square.color,
              margin: '5px',
            }}
          ></div>
        ))}
      </div>
    </>
  );
};
